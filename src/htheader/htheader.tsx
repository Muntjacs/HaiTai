import React from 'react';
import './htheader.css';

function htheader() {
    return (
        <div>
            <h1><a href="#"><img src="img/logo.png" alt="." /></a></h1>
            <div>
                <ul>
                    <li><a href="#">
                        <span><img src="img/gnb0.png" alt="" /></span><img src="img/gnb-border.png" alt="" />
                        </a></li>
                    <li><a href="#">
                        <span><img src="img/gnb1.png" alt="" /></span><img src="img/gnb-border.png" alt="" />
                        </a></li>
                    <li><a href="#">
                        <span><img src="img/gnb2.png" alt="" /></span><img src="/img/gnb-border.png" alt="" />
                        </a></li>
                    <li><a href="#">
                        <span><img src="img/gnb3.png" alt="" /></span><img src="img/gnb-border.png" alt="" />
                        </a></li>
                    <li><a href="#">
                        <span><img src="img/gnb4.png" alt="" /></span><img src="img/gnb-border.png" alt="" />
                        </a></li>
                        
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="#">
                        <img src="img/gnb5.png" alt="" /></a></li>
                    <li><a href="#">
                        <img src="img/gnb6.png" alt="" /></a></li>
                </ul>
            </div>
        </div>
     );
}
export default htheader;