import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Task1.scss'
const Task1 = () => {
  return (
    <div>
      <div className="main mt-5">
        <div className="maincontainer">
            <div className="invoiceleft">
                <div className="mb-5">
                    <h1>INVO</h1>
                </div>
                <div className="invoiceleftbutton mb-5">
                    Invoice Number:#45613
                </div>
                <div className="mb-5">
                    <h4>Invoice To</h4>
                    <p>Theme Vessel</p>
                    <p>info@thethemevessel.com</p>
                    <p>21-12 The Green Street,Meharpur</p>
                </div>
                <div className="mb-5">
                    <h4>Date</h4>
                    <p>Due Date:21/09/2021</p>
                </div>
            </div>
            <div className="invoiceright">
                <div className="mb-5">
                    <h1>INVOICE</h1>
                </div>
                <div className="invoicerightbutton mb-5">
                    Invoice Date : 24 Jan 2022
                </div>
                <div className="mb-5">
                    <h4>Bill To</h4>
                    <p>Apexco Inc</p>
                    <p>billing@Apexco.com</p>
                    <p>169 Teroghoria,Bangladesh</p>
                </div>
                <div>
                    <h4>Payment Method</h4>
                    <p>Credit Card</p>
                </div>
            </div>



        </div>
        <div className="tablecontainer mb-5">
            <table id="table">
                <tr>
                    <th>Item Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Totals</th>

                </tr>
                <tr>
                    <td>BS-200 <br/>Customize web application</td>
                    <td>$10.01</td>
                    <td>1</td>
                    <td>$10.01</td>
                </tr>
                <tr>
                    <td>BS-200 <br/>Customize web application</td>
                    <td>$10.01</td>
                    <td>2</td>
                    <td>$10.01</td>
                </tr>
                <tr>
                    <td>BS-200 <br/>Customize web application</td>
                    <td>$10.01</td>
                    <td>3</td>
                    <td>$10.01</td>
                </tr>
                <tr>
                

                    <td colSpan="3" className="tdhead">SubTotal</td>
                    <td>$710.01</td>

                </tr>
                <tr>
                    <td colSpan="3" className="tdhead">Tax</td>
                    <td>$85.01</td>

                </tr>
                <tr>
                    <td colSpan="3" className="tdhead">GrandTotal</td>
                    <td>$795.01</td>

                </tr>

            </table>
        </div>
        <div className="headercontainer mb-3">
            <div className='invoiceleft'>
                <h4>PaymentInfo</h4>
                <p>AccountName:00 123 456 789</p>
                <p>Account Number:John De</p>
                <p>Branch Name:XYZ</p>
            </div>
            <div>
                <h4>Terms and Conditions</h4>
                <p>Once order done money can't refund. <br/>Delivery might delay due to </p>
            </div>
            <div>
                <h4>Notes</h4>
                <p>This is computer generated invoics and <br/> physical signature</p>
            </div>

        </div>
        <div className="footercontainer">
            <div style={{padding:"10px"}}>
                <p className="footerheading"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                        <path
                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>+00 123 456 789</p>
            </div>
            <div style={{padding:"10px"}}>
                <p className="footerheading"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path
                            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>info@themevessel.com</p>
            </div>
            <div style={{padding:"10px"}}>
                <p className="footerheading"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path
                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>169 Teroghoria,Bangladesh</p>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Task1
