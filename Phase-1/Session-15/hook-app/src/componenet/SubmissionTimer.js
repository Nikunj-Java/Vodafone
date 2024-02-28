import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SubmissionTimer({submissionDate}){

    const [timeleft,setTimeLeft]= useState(null);
    const [hour,setHour]= useState(null);
    const [minute,setMinute]= useState(null);
    const [second,setSecond]= useState(null);
    const [day,setDay]= useState(null);

    const calculateTimeLeft=()=>{
        const now= new Date().getTime();
        const submissionTime= new Date(submissionDate).getTime();
        const timeDifference=submissionTime-now;

        if(timeDifference<=0){
            setTimeLeft("Submission Closed");
        }else{
            const days=Math.floor(timeDifference/(24*60*60*1000));
            const hours=Math.floor(timeDifference%(24*60*60*1000)/(60*60*1000));
            const minutes=Math.floor(timeDifference%(60*60*1000)/(60*1000));
            const seconds=Math.floor(timeDifference%(60*1000)/(1000));
            setHour(hours);
            setMinute(minutes);
            setSecond(seconds);
            setDay(days);

            //setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    }

    useEffect(()=>{
        calculateTimeLeft();

        //upadte time
        const timeInterval=setInterval(calculateTimeLeft,1000);
        //clean up

        return()=> clearInterval(timeInterval);
    },[submissionDate])

    return(
        <div className="container-fluid">
        <div className="row">

            <h2 className="bg-primary text-warning">The Deal Will Ends On</h2>

            <div className="col">
                <Card style={{ width: '100%' }}>
                   <Card.Body className="text-center">
                        <Card.Title>Days</Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                        <Button variant="info">{day} days</Button>
                      
                       
                    </Card.Body>
                    
                </Card>
            </div>
            <div className="col">
                <Card style={{ width: '100%' }}>
                   <Card.Body className="text-center">
                        <Card.Title>Hours </Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                         
                        <Button variant="success">{hour} h</Button>
                        
                       
                    </Card.Body>
                    
                </Card>
            </div>
            <div className="col">
                <Card style={{ width: '100%' }}>
                   <Card.Body className="text-center">
                        <Card.Title>Minutes </Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                        
                        <Button variant="warning">{minute} m</Button>
                         
                       
                    </Card.Body>
                    
                </Card>
            </div>
            <div className="col">
                <Card style={{ width: '100%' }}>
                   <Card.Body className="text-center">
                        <Card.Title>Seconds </Card.Title>
                        <Card.Text>
                           
                        </Card.Text>
                       
                        <Button variant="danger">{second} s</Button>
                       
                    </Card.Body>
                    
                </Card>
            </div>
           
        </div>
    </div>
    )
}

export default SubmissionTimer;