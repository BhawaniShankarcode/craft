import Image from "next/image";
import Frame from "../public/Frame.svg"
import rectImg1 from "../public/Rectangle1.png"
import rectImg2 from "../public/Rectangle2.png"
import arrow from "../public/Arrow1.svg"
import circle from "../public/circleTF.png"
import card1 from "../public/card1.png"
import card2 from "../public/card2.png"
import card3 from "../public/card3.png"
import frame2 from "../public/Frame2.png"
import workflow1 from "../public/workflow-design1.png"
import workflow2 from "../public/workflow-produce1.png"
import frame3 from "../public/Frame3.png"
import teer1 from "../public/teer1.png"
import teer2 from "../public/teer2.png"
import frame4 from "../public/Frame4.png"
import workflow3 from "../public/workflow3.png"
import rectimg1 from "../public/Rectimg1.png"
import rectimg2 from "../public/Rectimg2.png"
import rectimg3 from "../public/Rectimg3.png"
import rectimg4 from "../public/Rectimg4.png"
import rectimg5 from "../public/Rectimg5.png"
import code1 from "../public/code1.png"
import code2 from "../public/code2.png"
import code3 from "../public/code3.png"
import code4 from "../public/code4.png"
import code5 from "../public/code5.png"
import twitter from "../public/twitter.png"
import pdf from "../public/pdf.png"
import pintrest from "../public/pintrest.png"
import gmail from "../public/gmail.png"
import facebook from "../public/facebook.png"
import videoplayer from "../public/videoplayer.png"
import instagram from "../public/instagram.png"
import post1 from "../public/post1.png"
import post2 from "../public/post2.png"
import post3 from "../public/post3.png"
import post4 from "../public/post4.png"
import post5 from "../public/post5.png"
import post6 from "../public/post6.png"
import post7 from "../public/post7.png"
import post8 from "../public/post8.png"
import review1 from "../public/review1.png"
import review2 from "../public/review2.png"
import review3 from "../public/review3.png"
import review4 from "../public/review4.png"
import review5 from "../public/review5.png"
import reviewstar from "../public/reviewstar.png"
import user1 from "../public/user1.png"
import user2 from "../public/user2.png"
import user3 from "../public/user3.png"
import user4 from "../public/user4.png"
import user5 from "../public/user5.png"
import frame5 from "../public/Frame5.png"
import Link from "next/link";
import blog1 from "../public/Blog1.png"
import blog2 from "../public/Blog2.png"
import blog3 from "../public/Blog3.png"
import blogbtn1 from "../public/Blogbtn1.png"
import blogbtn2 from "../public/Blogbtn2.png"
import arrow2 from "../public/arrow2.png"
import golio from "../public/golio.png"
import menu from "../public/menu.png"
import cross from "../public/cross.png"
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";


export default function Home() {
  const data = [
    { 
        // img : '/public/Blog1.png',
        title : 'Allow your customers to create visuals from a Form',
        desription : 'Learn step by step how to empower your customers with image generation.',
    },
    { 
        // img : '/public/Blog2.png',
        title : 'Allow your customers to create visuals from a Form',
        desription : 'Learn step by step how to empower your customers with image generation.',
    },
    { 
        // img : '/public/Blog3.png',
        title : 'Allow your customers to create visuals from a Form',
        desription : 'Learn step by step how to empower your customers with image generation.',
    }
   ]
  return (
<>
        <div className="main">
            <Navbar menu={menu} cross={cross}/>
            <div className="getStartedBoxMain">

            <div className="getStartedBox">      
              <div className="getStartedBox1">
            <Image src={Frame} alt="" className="img1"/>  
              </div>
            
            <div className="getStartedBox2">
              <div className="getStarted1">
              <h1 className="gsbText inline">Transform Your </h1> 
              <Image src={rectImg1} className="rectImg inline"/> 
              <h1 className="gsbText inline">Business *  </h1> </div>
              

            <div className="getStarted2">
              <h1 className="inline gsbText">with
                <Image src={rectImg2} className="rectImg inline"/>Creative Automation</h1>   
            </div>
            <p className="gsbPara">"Utilize our API and integrations to automatically create social media visuals, ecommerce banners, and various other graphics."</p>
            
            <div className="gsbButtonDiv">
            <button className="gsbButton">Get Started  <Image src={arrow} className="arrow"/></button>
            <Image src={circle} className="trialFreeBox"/>
              </div>
            </div>
            
                      
            </div>
            <div className="cardBox">
              <div className="firstBox">
                  <Image src={card1}  alt="card image" className="card1Img"/>
                  <h1 className="card1Heading">Automate</h1>
                  <p className="card1Para">marketing tasks using No-code</p>
              </div>
              <div className="secondBox">
                <p className="secondPara">Create Videos & Images using a REST API</p>
                <Image src={card2} className="card2Img"/>                
              </div>
              
              <div className="thirdBox">
                <div className="thirdBoxImg">
                <Image src={card3} className="card3Img"/>
                </div>
                <div className="twoDiv">
                <div className="thirdBluediv">
                <p className="card3Para">Mass-Produce Through a Spreadsheet</p>
                <p className="explore3 text-[24px]  font-bold mt-10">Explore <Image src={arrow} className="inline ml-40 arrowfrist"/></p>
                </div>
                <div className="thirdYellowdiv text-left">
                  <p className="yp text-[80px] font-black ml-4">80%</p>
                  <p className="yp2 text-[24px] font-extrabold ml-8 mr-8">Faster Creative Content Creation</p>
                </div>
                </div>
              </div>
            </div>

            <p className="lg:text-[100px]  font-bold text-center text-[20px]">10x your asset creation speed</p>
            <p className="lg:text-[100px]  font-bold text-center text-[20px] text-[#496AF1]">With Craftly</p>

            <div className="craftDiv">
              <div className="craftDiv1">
              <div className="craftDivPara">
              <p className="lg:w-[764px] lg:text-[40px] text-[14px] text-[#496AF1] lg:pb-12 pb-2 pt-3 w-[272px]">Enhance designer productivity with an authentic multi-format design solution </p>
              <p className="lg:w-[731px] lg:text-[22px] text-[10px] w-[260px]">Equip designers with the necessary tool to swiftly design multi-format campaigns in a fraction of the time. Say goodbye to struggling with antiquated software from the 1990s.</p>
            </div>
            <div className="craftDivImg">
              <Image src={workflow1} className="workflow1"/>
              <Image src={frame2} className="frame2"/>
            </div>
            </div>

            <div className="craftDiv2">
            <div className="craftDivImg2">
              <Image src={frame3} alt="frame" className="frame3"/>
              <Image src={teer1} alt=""  className="teer1"/>
              <Image src={workflow2} alt="workflow" className="workflow2" />
              <Image src={teer2} alt="" className="teer2"/>
            </div>
            <div className="craftDivPara2">
              <p className="lg:w-[764px] lg:text-[40px] text-[14px] text-[#496AF1] lg:pb-12 pb-2 pt-3 w-[272px]">Unblock campaign production by empowering marketers & operators </p>
              <p className="lg:w-[731px] lg:text-[22px] text-[10px] w-[260px]">Provide marketers, operators, and clients with the means to independently create campaigns whenever necessary, all while adhering to creative parameters predetermined by the designer</p>
            </div>
            </div>

            <div className="craftDiv3">
            <div className="craftDivPara3">
            <p className="lg:w-[764px] lg:text-[40px] text-[14px] text-[#496AF1] lg:pb-12 pb-2 pt-3 w-[272px]">Scale asset production by automating generation </p>
            <p className="lg:w-[731px] lg:text-[22px] text-[10px] w-[260px]">Connect your existing data and tools to automatically generate thousands of asset variations in seconds.</p>
            </div>
            <div className="craftDivImg3">
              <Image src={workflow3} className="workflow4"/>
              <Image src={frame4} className="frame4"/>
            </div>
            </div>
            </div>

             <div className="blackCraft">
              <p className=" lg:text-[80px] text-[20px] text-white m-auto md:mt-40 mt-10 text-center lg:w-[auto] w-[281px]">What Craftly can do for you ?</p>
              <p className="lg:text-[22px] text-[10px] text-white text-center lg:w-[731px] w-[266px] m-auto">No matter your role or level of design skills, we’ve here to make your worklife easier with our all-in-one solution.</p>
              <div className="blackCraftImg">
               <div className="rectDiv1">
                <Image src={rectimg1} className="rectimg1"/>
                <Image src={rectimg2} className="rectimg2"/>
               </div>
               <div className="rectDiv3">
                <Image src={rectimg5} className="rectimg5"/>
               </div>
               <div className="rectDiv2">
                <Image src={rectimg3} className="rectimg3"/>
                <Image src={rectimg4} className="rectimg4"/>
               </div>
               </div>
               </div> 
            





            <div className="yellowCraft">
              <div className="yelloCraftContent ">
                  <p className="lg:text-[80px] text-[20px] font-bold mt-3">Various methods to engage</p>
                   <p className="lg:text-[22px] lg:w-auto text-[10px] w-[222px] text-center">Generate images and videos using a range of integrations and plugins</p>
      
                   <div className="codeDiv">
            <div className="codeMain">
              <div className="codeImgDiv">
                <Image src={code1} alt=""/>
              </div>
              <p className="lg:text-[40px]  font-bold mt-3">API</p>
            </div>
            <div className="codeMain">
              <div className="codeImgDiv">
                <Image src={code2} alt=""/>
              </div>
              <p className="lg:text-[40px] font-bold mt-3">Zapier</p>
            </div>
            <div className="codeMain">
              <div className="codeImgDiv">
                <Image src={code3} alt=""/>
              </div>
              <p className="lg:text-[40px] font-bold mt-3">Airtable</p>
            </div>
            <div className="codeMain">
              <div className="codeImgDiv">
                <Image src={code4} alt=""/>
              </div>
              <p className="lg:text-[40px] font-bold mt-3">Forms</p>
            </div>
            <div className="codeMain">
              <div className="codeImgDiv">
                <Image src={code5} alt=""/>
              </div>
              <p className="lg:text-[40px] font-bold mt-3">URL</p>
            </div>
           </div>


              </div>
              <div className="yellowSpace">
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
            </div>

            
            <div className="whiteCraft">
              <div className="fristWhiteHeading whiteHeading">
              <p className="lg:text-[100px] text-[30px] font-bold">100+</p>
              <p className="lg:text-[30px] font-medium text-[10px]">Pre made designs</p>  
              </div>

              <div className="secondWhiteHeading whiteHeading">
                <p className="lg:text-[100px] text-[30px] font-bold">2k+</p>
                <p className="lg:text-[30px] font-medium text-[10px]">users automated with us</p>
              </div>

              <div className="thirdWhiteHeadling whiteHeading">
                <p className="lg:text-[100px] text-[30px] font-bold">500+</p>
                <p className="lg:text-[30px] font-medium text-[10px]">Generated images</p>
              </div>
              </div>


            <div className="golio">
              <div className="golio1">
                <div className="golio2">
                  <div className="golio3">
                    <div className="golio4">
                      <div className="golio5">
                        <div className="golio6">
                          <div className="golio7">
                            <div className="golio8">
                            <Image src={twitter} className="twitter"/>
                        <Image src={videoplayer} className="videoplayer"/>
                        <Image src={gmail} className="gmail"/>
                        <Image src={pdf} className="pdf"/>
                        <Image src={pintrest} className="pintrest"/>
                        <Image src={facebook} className="facebook"/>
                        <Image src={instagram} className="instagram"/>
                              <p className="text-[50px] font-bold text-[#496AF1] centerPara1">Craftly</p>
                              <p className="text-[80px] w-[575px] font-bold centerPara2">Use cases</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



<div className="golioDiv">
   <Image src={golio} alt="craft social media" className="golioImg"/>
</div>





<div className="generatepara">
  <div className="generatepara1">
  <div className="generateparaBox bg-[#F3FE00]">
  <p className="genPara">Generate Images via API/ Zapier</p>
  </div>
  <div className="generateparaBox bg-[#496AF1]">
  <p className="genPara">Watermark Videos via API/Zapier</p>
  </div>
  <div className="generateparaBox bg-[#F3FE00]">
  <p className="genPara">Generate PDFs via API/Zapier</p>
  </div>
  </div>
  <div className="generatepara2">
  <div className="generateparaBox bg-[#496AF1]">
  <p className="genPara">E-Mail Marketing</p>
  </div>
  <div className="generateparaBox bg-[#F3FE00]">
  <p className="genPara">Social media</p>
  </div>
  <div className="generateparaBox bg-[#496AF1]">
  <p className="genPara">Sales and Outreach</p>
  </div>
  </div>
</div>


<div className="usgBlackCraft">
  <div className="usgBlackText">
    <p className="usgBText1">Designed & built</p>
    <p className="usgBText2">Using Craftly</p>
    <p className="usgBText3">Around 100+ templates, 2k users, 500+ images have been designed and built using Carftly </p>
    <button className="GetStartedButton">Get Started  <Image src={arrow} className="arrow"/></button>
  </div>
  <div className="usgBlackImg">
     <div className="usgBlackImg1">
      <Image src={post1} className="post1"/>
      <Image src={post2} className="post2"/>
      <Image src={post3} className="post3"/>
      <Image src={post4} className="post4"/>
     </div>
     <div className="usgBlackImg2">
      <Image src={post5} className="post5"/> 
      <Image src={post6} className="post6"/> 
      <Image src={post7} className="post7"/> 
      <Image src={post8}  className="post8 lg:relative lg:top-7 "/> 
     </div>   
     <div className="usgBlackImg3">
      {/* <Image src={post1} className="post9"/> */}
      <Image src={post2} className="post10"/>
      <Image src={post3} className="post11"/>
      <Image src={post4} className="post12"/>
     </div>
  </div>
</div>


<div className="reviewBar">
  <div className="usersLove">
    <p className="lg:text-[80px] text-[20px] font-bold">Our users loved us !</p>
    <Image src={frame2} className="userFrame" />
  </div>
  <div className="usersImgDiv">
    <Image src={review1} alt="testimonial img" className="reviewImg1"/>
    <Image src={review2} alt="testimonial img" className="reviewImg2"/>
    <Image src={review3} alt="testimonial img" className="reviewImg3"/>
    <Image src={review4} alt="testimonial img" className="reviewImg4"/>
    <Image src={review5} alt="testimonial img" className="reviewImg5"/>
    
    <div className="starDiv">
    <Image src={reviewstar} alt="testimonial img" className="reviewStar"/>
    <p className="font-extrabold lg:text-[18px] ml-1 text-[8px] w-[107px]">loved by 200+ customers</p>
    </div>
  </div>

<div className="userCardsDiv">
<div className="userCard1 userCard">
    <Image src={user1} alt="user1" className="userImg"/>
  <p className="usep">If a new tool comes out and it saves you time and costs less than the equivalent value, it's usually an insta buy.</p>
  <Image src={reviewstar}/>
  <p className="parajs">Jackson Schaal</p>
</div>
<div className="userCard2 userCard">
  <Image src={user2} alt="user2" className="userImg"/>
  <p className="usep">If a new tool comes out and it saves you time and costs less than the equivalent value, it's usually an insta buy.</p>
  <Image src={reviewstar} alt=""/>
  <p className="parajs">Jackson Schaal</p>
</div>
<div className="userCard3 userCard">
  <Image src={user3} alt="user3" className="userImg"/>
  <p className="usep">If a new tool comes out and it saves you time and costs less than the equivalent value, it's usually an insta buy.</p>
  <Image src={reviewstar} alt=""/>
  <p className="parajs">Jackson Schaal</p>
</div>
<div className="userCard4 userCard">
<Image src={user4} alt="user4" className="userImg"/>
  <p className="usep">If a new tool comes out and it saves you time and costs less than the equivalent value, it's usually an insta buy.</p>
  <Image src={reviewstar} alt=""/>
  <p className="parajs">Jackson Schaal</p>
</div>
<div className="userCard5 userCard">
<Image src={user5} alt="user5" className="userImg"/>
  <p className="usep">If a new tool comes out and it saves you time and costs less than the equivalent value, it's usually an insta buy.</p>
  <Image src={reviewstar} alt=""/>
  <p className="parajs">Jackson Schaal</p>
</div>  
</div>  
</div>

<div className="threeContainer">

<Slider/>
<div className="yellowCraft2">
  <div className="yellowCraftContent">
<p className="yccPara">Slow asset production is killing your growth Unlock your  true potential now *</p>
<button className="GetStartedButton GetStartedButton2 mt-24 ">Get Started  <Image src={arrow} className="arrow"/></button>  
  </div>
<div className="yellowSpace2">

              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>
              <div className="yellowLine"></div>            
            </div>
            </div>



            <div className="footer">
  <div className="footerHead footerHead1">
    <p className="footerHeadPara">Use Cases</p>
    <p className="footerPara">Generate Images via API</p>
    <p className="footerPara">Watermark Videos via API</p>
    <p className="footerPara">Generate PDFs via API</p>
    <p className="footerPara">Generate Images with Zapier</p>
    <p className="footerPara">Watermark Videos with Zapier</p>
    <p className="footerPara">Generate PDFs with Zapier</p>
    <p className="footerPara">More Use Cases</p>
  </div>
  <div className="footerHead footerHead2">
    <p className="footerHeadPara">Product</p>
    <p className="footerPara">Image Generation API</p>
     <p className="footerPara">Multi Image</p> 
     <p className="footerPara">Generation API</p>
      <p className="footerPara">Video</p>
       <p className="footerPara">Generation API</p>
        <p className="footerPara">PDF Generation API</p> 
        <p className="footerPara">Template Library</p> 
        <p className="footerPara">Bannerbear for Enterprise</p>
  </div>
  <div className="footerHead footerHead3">
    <p className="footerHeadPara">Integrations</p>
    <p className="footerPara">Airtable Integration</p>
    <p className="footerPara">Zapier Integration</p>
    <p className="footerPara">Integromat Integration</p>
    <p className="footerPara">Forms</p>
    <p className="footerPara">URLS</p>
    <p className="footerPara">Wordpress</p>
  </div>
  <div className="footerHead footerHead4">
    <p className="footerHeadPara">Demos</p>
<p className="footerPara">Multi Image Demo</p>
<p className="footerPara">Al Face Detect Demo</p>
<p className="footerPara">Twitter to Instagram</p>
<p className="footerPara">Real Estate Demo</p>
<p className="footerPara">Github Social</p>
<p className="footerPara">Open Graph</p>
<p className="footerPara">Smart Crop Demo</p>
<p className="footerPara">Online Certificate Maker</p>
<p className="footerPara">Online Wedding Invite Maker</p>
<p className="footerPara">Online Event ID Card Maker</p>
<p className="footerPara">Online Photo Collage Maker</p>
<p className="footerPara">Online Invoice Maker</p>
  </div>
  <div className="footerHead footerHead5">
    <p className="footerHeadPara">Docs & Guides</p>
   <p className="footerPara"> Help Articles </p>
<p className="footerPara"> Blog </p>
<p className="footerPara"> eBooks </p>
<p className="footerPara"> API Quick Start </p>
<p className="footerPara"> API Reference </p>
  </div>
</div>
</div>          


           </div>
        </div>
        </div>

    </>
  );
}
