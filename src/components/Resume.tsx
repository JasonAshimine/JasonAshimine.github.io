import { useState } from "react";

export default function Resume(){
    const [loaded, setLoad] = useState(false);

    return (
        <div>
            <p className={loaded ? "d-none": "" }>Loading...</p>

            <object data='/Resume - Software.pdf' type='application/pdf' width='100%' height='700px' onLoadStart={() => setLoad(false)} onLoad={() => setLoad(true)} > 
                <p>
                    It appears your Web browser is not configured to display PDF files. 
                    No worries, just <a href='/Resume - Software.pdf'>click here to download the PDF file.</a> 
                    or <a href="drive.google.com/[drive path]/view?usp=sharing"> click here to view</a>
                </p>
            </object> 
        </div>        
    );

}