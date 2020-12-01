import React from 'react'
import AboutImg from '../assets/img/img_01.png'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';


const About = () => {

    const StyleAbout = styled.div`
        text-align:center;  
        h1{
            font-family: 'Caveat', cursive;
            margin-top:30px;
            letter-spacing:5px;
            font-size:50px;
             }
        p{
            letter-spacing:2px;
            line-height:1.75;
        }
        button{
            margin:30px 0;
        }
        img{
            margin:30px 0;
            width:100%;
        }
        
        @media screen and (max-width: 767px) {
            p{
                font-size:15px;
            }
            h1{
                font-size:35px;
            }
        }

        /*PCの場合*/
        .pc	{ display:inline!important; }
        .mb	{ display:none!important; }
        @media screen and (max-width: 768px) {
        /*タブレット、スマホの場合*/
        .pc	{ display:none!important; }
        .mb { display:inline!important; }
        }


        
    `;



    return (
        <>
        <StyleAbout>
            <h1>Select purfume</h1>
            <div className="about-img">
                <img src={AboutImg} alt=""/>
            </div>
            <div className="about0t">
                <p>アロマオイルの中には、<br className="mb"/>リラックス効果のあるものも多いので、<br/>
                    疲れているときのリフレッシュになります。<br/>
                    ですが、疲れているときは<br className="mb"/>アロマを選んだりするのさえ、<br/>
                    億劫になってしまうことも。
              </p>
                    <p>
                    select purfumeは<br className="mb"/>今の気分と好きな香りの系統を選ぶだけで、<br/>
                    今のあなたに合った香りを選びます。
                    </p>
            </div>
            <Button variant="contained" color="primary" disableElevation>
                    実際に使ってみる
             </Button>        
         </StyleAbout>
        </>
    )
}

export default About
