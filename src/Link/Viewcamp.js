import React ,{useState,useEffect}from 'react';
import Footer from '../Compounts/Footer';
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from '../Compounts/Header.js';
export default function Viewcamp() {

  const navigate=useNavigate();
  const {BASE_URL} =require ('../config.js');
  
  const [data,setData]=useState([])
  const [newvalue2,newchange] = useState({
    cid:"",
    cname:"",
    cplace:"",
    cdate:"",
    ctime:"",
    caddress:""
  })


  useEffect(()=>{
    axios.get(BASE_URL +`camp/`)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
  },[])
  
  const hdelete=(cid)=>
  {
    const confirm=window.confirm("Would you like to Delete?"+cid);
    if(confirm)
    {
      axios.delete(BASE_URL +`camp/`+cid)
      .then((res) => {
        navigate(0)
        toast.error('Delete success');
        console.log('Delete success:');
      })
      .catch((err) => {
        toast.error('Error during insertion');
        console.error(err);
      });

   }
  }
  const hget=(uid)=>
    {
      axios.get(BASE_URL +`camp/`+uid)
      .then(console.log(uid))
      .then(res=> newchange(res.data[0]))
      .catch(err=>console.log(err));
     
    }

    function uhandlechange(evt)
    {
      newchange({...newvalue2,[evt.target.name]:evt.target.value});
    }
    const hsubmit=(e)=>{


      e.preventDefault();
      console.log(newvalue2);
      axios.put(BASE_URL +`camp/`+newvalue2.cid,{newvalue2})
      .then((res) => {
        navigate(0)
        toast.success('Update success');
        console.log('Update success:');
      })
      .catch((err) => {
        toast.error('Error during insertion');
        console.error(err);
      });
    }
  return (
    <>
      <Header />
      <section className="home-section">
        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              <div className="row"></div>
              <div className="row">
                <div className="col-12">
                  <div className="card fade-up">
                    <div className="card-body">
                      <div className="row ">
                        <div className="col-sm-6 ">
                          <h2 className="Head">Medical Camp </h2>
                        </div>
                        <div className="col-sm-6 ">
                          <Link to="../Medical_Camp">
                            {" "}
                            <input
                              type="submit"
                              value="Back"
                              className="ladda-button btn btn-primary mb-2 mt-3 fade-down  justify-content-end "
                              data-style="expand-right"
                              id="b1"
                            ></input>
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Camp Id</th>
                            <th>Camp Name</th>
                            <th>Place</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((x, index) => {
                            return (
                              <tr key={index}>
                                <td>{x.cid}</td>
                                <td>{x.cname}</td>
                                <td>{x.cplace}</td>
                                <td>{x.cdate}</td>
                                <td>{x.ctime}</td>
                                <td>{x.caddress}</td>

                                <td>
                                  <input
                                    type="button"
                                    className="ladda-button btn btn-outline-primary"
                                    value="Edit"
                                    onClick={(e2) => hget(x.cid)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  />
                                </td>
                                <td>
                                  <input
                                    type="button"
                                    className="ladda-button btn btn-outline-danger"
                                    value="Delete"
                                    onClick={(e) => hdelete(x.cid)}
                                  />
                                </td>
                                <ToastContainer />
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Camp
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={(e) => hsubmit(e)}>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="inputAddress" className="form-label">
                      Camp ID
                    </label>
                    <input
                      required="required"
                      type="text"
                      className="form-control"
                      name="cid"
                      id="inputAddress"
                      placeholder=" ID"
                      value={newvalue2.cid}
                      onChange={uhandlechange}
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4" className="col-form-label">
                      Camp Name
                    </label>
                    <input
                      type="text"
                      required="required"
                      name="cname"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Camp Name"
                      value={newvalue2.cname}
                      onChange={uhandlechange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4" className="col-form-label">
                      Place
                    </label>
                    <input
                      required="required"
                      type="text"
                      name="cplace"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Place"
                      value={newvalue2.cplace}
                      onChange={uhandlechange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label for="inputEmail4" className="col-form-label">
                        Date
                      </label>
                      <input
                        type="date"
                        required="required"
                        name="cdate"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="DD/MM/YYYY"
                        value={newvalue2.cdate}
                        onChange={uhandlechange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label for="inputPassword4" className="col-form-label">
                        Time
                      </label>
                      <input
                        required="required"
                        type="time"
                        name="ctime"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Time"
                        value={newvalue2.ctime}
                        onChange={uhandlechange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label for="inputAddress" className="form-label">
                        Address
                      </label>
                      <input
                        required="required"
                        type="text"
                        className="form-control"
                        name="caddress"
                        id="inputAddress"
                        placeholder=" Addresss"
                        value={newvalue2.caddress}
                        onChange={uhandlechange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                  <div className="form-group col-md-4">
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
