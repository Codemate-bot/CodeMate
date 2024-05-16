import React from 'react';
import { useNavigate } from 'react-router-dom';
const CodeMate = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF1E4] flex p-[0_0_10px_0] w-[1920px] box-sizing-border">
      <div className="relative flex flex-row w-[1932px] h-[fit-content] box-sizing-border">
        <div className="bg-[#8579B2] relative m-[0_12px_0_0] flex flex-col items-center p-[54px_0_30px_0] w-[330px] box-sizing-border">
          <div className="m-[0_2.3px_88px_0] flex box-sizing-border">
            <span className="break-words font-['Poppins'] font-bold text-[26px] leading-[1] text-[#FFFFFF]">
            Code Mate
            </span>
          </div>
          <div className="rounded-[40px] bg-[#414084] relative m-[0_0_40px_0] flex flex-row p-[23px_0_22px_0] w-[244px] box-sizing-border">
            <div className="m-[0_12px_1px_0] flex w-[14px] h-[14px] box-sizing-border">
              <img className="w-[14px] h-[14px]" />
            </div>
            <span className="break-words font-['Poppins'] font-normal text-[15px] leading-[1] text-[#FFFFFF]">
            New Chat
            </span>
          </div>
          <div className="m-[0_175px_225px_0] inline-block break-words font-['Poppins'] font-normal text-[13px] leading-[1] uppercase text-[#9EB384]">
          Yesterday
          </div>
          <div className="m-[0_177.7px_127px_0] inline-block break-words font-['Poppins'] font-normal text-[13px] leading-[1] uppercase text-[#9EB384]">
          Last week
          </div>
          <div className="m-[0_164.9px_413px_0] inline-block break-words font-['Poppins'] font-normal text-[13px] leading-[1] uppercase text-[#9EB384]">
          Last Month
          </div>
          <div className="rounded-[45px] bg-[#FFEED6] flex p-[19px_0.5px_19px_0] w-[244px] box-sizing-border">
            <span className="break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
            Log Out
            </span>
          </div>
        </div>
        <div className="m-[10px_0_30px_0] flex flex-col items-center box-sizing-border">
          <div className="bg-[#414084] relative m-[0_0_18px_0] flex p-[30px_40px_29px_53px] w-[1590px] box-sizing-border">
            <div className="relative flex flex-row justify-between w-[1497px] h-[fit-content] box-sizing-border">
              <div className="rounded-[40px] border-[1px_solid_#CEDEBD] bg-[#8579B2] flex flex-row justify-between p-[9px_39.4px_9px_9px] w-[495px] box-sizing-border">
                <div className="flex flex-row box-sizing-border">
                  <div className="rounded-[40px] bg-[#CEDEBD] m-[0_40px_0_0] flex p-[15px_0.5px_15px_0] w-[165px] h-[fit-content] box-sizing-border">
                    <span className="break-words font-['Poppins'] flex justify-center ifont-medium text-[13px] leading-[1] text-[#414084]">
                    <button onClick={() => navigate('/IndividualMode')}>Individual Mode</button>
                    </span>
                  </div>
                  <div className="m-[15px_0_15px_0] flex box-sizing-border">
                    <span className="break-words font-['Poppins'] font-medium text-[13px] leading-[1] text-[#FFFFFF]">
                    <button onClick={() => navigate('/GeneralMode')}>General Mode</button>
                  
                    </span>
                  </div>
                </div>
                <div className="m-[15px_0_15px_0] flex box-sizing-border">
                  <span className="break-words font-['Poppins'] font-medium text-[13px] leading-[1] text-[#FFFFFF]">
                  <button onClick={() => navigate('/TeamMode')}>Team Mode</button>
                  </span>
                </div>
              </div>
              <div className="m-[10px_0_11px_0] flex flex-row w-[109px] h-[fit-content] box-sizing-border">
                <div className="shadow-[0px_0px_14px_0px_rgba(0,0,0,0.15)] rounded-[20px] bg-[#FFFFFF] relative m-[9px_20px_10px_0] flex p-[6px_6px_6px_6px] w-[47px] h-[23px] box-sizing-border">
                  <div className="rounded-[20px] bg-[#25293F] absolute top-[2px] right-[2px] w-[19px] h-[19px]">
                  </div>
                  <img className="relative w-[11px] h-[11px]" />
                </div>
                <div className="rounded-[21px] bg-[url('assets/images/Ellipse139.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat w-[42px] h-[42px]">
                </div>
              </div>
            </div>
            <div className="rounded-[6px] bg-[#F69727] absolute top-[39px] right-[42px] w-[12px] h-[12px]">
            </div>
          </div>
          <div className="relative m-[0_40px_0_40px] flex box-sizing-border">
            <div className="relative flex flex-row box-sizing-border">
              <div className="rounded-[20px] bg-[#CEDEBD] relative m-[110px_20px_826px_0] flex p-[10px_12.8px_10px_13px] box-sizing-border">
                <span className="break-words font-['Plus_Jakarta_Sans'] font-bold text-[20px] leading-[1] text-[#414084]">
                A
                </span>
              </div>
              <div className="m-[0_20px_10px_0] flex flex-col box-sizing-border">
                <div className="rounded-[14px] border-[1px_solid_#D6BC97] bg-[#FFEED6] m-[0_0_40px_0] flex flex-row justify-between p-[20px_22px_20px_21px] w-[940px] box-sizing-border">
                  <div className="m-[1px_8px_1px_0] inline-block w-[869px] break-words font-['Plus_Jakarta_Sans'] font-semibold text-[16px] leading-[1] text-[#2D2D2D]">
                  The advantages of Artificial Intelligence
                  </div>
                  <div className="flex w-[18px] h-[18px] box-sizing-border">
                    <img className="w-[18px] h-[18px]" />
                  </div>
                </div>
                <div className="rounded-[14px] bg-[#FFEED6] m-[0_0_40px_0] flex flex-col items-end p-[22px_22px_19.7px_22px] w-[fit-content] box-sizing-border">
                  <div className="m-[0_1.7px_45px_0] inline-block break-words font-['Plus_Jakarta_Sans'] font-medium text-[14px] leading-[1.714] text-[#1B2559]">
                  Artificial Intelligence (AI) offers numerous advantages and has the potential to revolutionize various aspects of our lives. Here are some key advantages of AI:<br />
                  <br />
                  Automation: AI can automate repetitive and mundane tasks, saving time and effort for humans. It can handle large volumes of data, perform complex calculations, and execute tasks with precision and consistency. This automation leads to increased productivity and efficiency in various industries.<br />
                  <br />
                  Decision-making: AI systems can analyze vast amounts of data, identify patterns, and make informed decisions based on that analysis. This ability is particularly useful in complex scenarios where humans may struggle to process large datasets or where quick and accurate decisions are crucial.<br />
                  <br />
                  Improved accuracy: AI algorithms can achieve high levels of accuracy and precision in tasks such as image recognition, natural language processing, and data analysis. They can eliminate human errors caused by fatigue, distractions, or bias, leading to more reliable and consistent results.<br />
                  <br />
                  Continuous operation: AI systems can work tirelessly without the need for breaks, resulting in uninterrupted 24/7 operations. This capability is especially beneficial in applications like customer support chatbots, manufacturing processes, and surveillance systems.
                  </div>
                  <div className="flex flex-row w-[64px] box-sizing-border">
                    <img className="m-[0px_20px_0_0] w-[22px] h-[19.3px]" />
                    <img className="m-[0_0_0px_0] w-[22px] h-[19.3px]" />
                  </div>
                </div>
                <div className="m-[0_0_120px_0] flex flex-row self-start gap-[0_20px] w-[692px] box-sizing-border">
                <div className="rounded-[45px] bg-[#8579B2] flex justify-center items-center p-[19px_0.7px_19px_0] w-[220px] box-sizing-border">
                <span className="break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#FFFFFF]">
                  Make Response Shorter
                </span>
              </div>
              
                  <div className="rounded-[45px] bg-[#8579B2] flex justify-center items-center p-[19px_0.4px_19px_0] w-[245px] box-sizing-border">
                    <span className="break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#FFFFFF]">
                    Explain it to me like a lawyer
                    </span>
                  </div>
                  <div className="rounded-[45px] bg-[#8579B2] flex justify-center items-center p-[19px_0.2px_19px_0] w-[187px] box-sizing-border">
                    <span className="break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#FFFFFF]">
                    Tell me about more
                    </span>
                  </div>
                </div>
                <div className="rounded-[45px] border-[1px_solid_#8579B2] bg-[#FFEED6] m-[0_0_30px_120px] flex flex-row self-center p-[17px_0_19px_0] w-[218px] box-sizing-border">
                  <img className="m-[2px_10px_0_0] w-[14px] h-[14px]" />
                  <span className="break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1.143] text-[#8579B2]">
                  Regenerate response
                  </span>
                </div>
                <div className="rounded-[5px] border-[1px_solid_#D6BC97] bg-[#FFEED6] relative p-[19px_19px_19px_19px] w-[fit-content] box-sizing-border">
                  <span className="break-words font-['Plus_Jakarta_Sans'] font-semibold text-[14px] leading-[1] text-[#8579B2]">
                  The advantages of Artificial Intelligence
                  </span>
                </div>
              </div>
              <div className="rounded-[21px] bg-[url('assets/images/Ellipse139.jpeg')] bg-[50%_50%] bg-cover bg-no-repeat m-[9px_40px_925px_0] w-[42px] h-[42px]">
              </div>
              <div className="rounded-[10px] bg-[#EAF2E1] relative m-[22px_0_0_0] flex flex-col p-[30px_30px_749px_30px] box-sizing-border">
                <p className="m-[0_0_30px_0] self-start break-words font-['Poppins'] font-normal text-[25px] text-[#414084]">
                <span className="links-to-document-and-website-for-this-response-sub-0"></span><span className="links-to-document-and-website-for-this-response-sub-31"></span><span className="links-to-document-and-website-for-this-response-sub-0"></span><span className="links-to-document-and-website-for-this-response-sub-31"></span><span></span>
                </p>
                <div className="m-[0_0px_10px_0] flex flex-row justify-between w-[348px] box-sizing-border">
                  <span className="m-[0_9px_0_0] w-[325px] break-words font-['Poppins'] font-normal text-[12px] underline text-[#414084]">
                  Link to website
                  </span>
                  <img className="m-[2px_0_2px_0] w-[14px] h-[14px]" />
                </div>
                <div className="bg-[#D0E0BF] m-[0_0_11px_0] w-[348px] h-[1px]">
                </div>
                <div className="m-[0_0px_10px_0] flex flex-row justify-between w-[348px] box-sizing-border">
                  <span className="m-[0_9px_0_0] w-[325px] break-words font-['Poppins'] font-normal text-[12px] underline text-[#414084]">
                  Link to ducment file
                  </span>
                  <img className="m-[2px_0_2px_0] w-[14px] h-[14px]" />
                </div>
                <div className="bg-[#D0E0BF] w-[348px] h-[1px]">
                </div>
              </div>
            </div>
            <div className="absolute left-[24px] top-[432px] w-[306px] h-[calc(100vh - 432px)] overflow-y-auto box-sizing-border">
            <div className="absolute left-[24px] top-[432px] w-[350px] h-[calc(100vh - 432px)] overflow-y-auto box-sizing-border">
            <div className="m-[4.5px_0_5.5px_0] flex flex-row box-sizing-border">
              <img className="m-[0_16px_0_0] w-[24px] h-[19px]" />
              <div className="m-[1.5px_0_2.5px_0] inline-block break-words font-['Poppins'] font-normal text-[15px] leading-[1] text-[#FFFFFF]">
                Reasearch about ui ux
              </div>
            </div>
            <div className="m-[4.5px_0_5.5px_0] flex flex-row box-sizing-border">
              <img className="m-[0_16px_0_0] w-[24px] h-[19px]" />
              <div className="m-[1.5px_0_2.5px_0] inline-block break-words font-['Poppins'] font-normal text-[15px] leading-[1] text-[#FFFFFF]">
                Give me a proposal for company name
              </div>
            </div>
            <div className="m-[4.5px_0_5.5px_0] flex flex-row box-sizing-border">
              <img className="m-[0_16px_0_0] w-[24px] h-[19px]" />
              <div className="m-[1.5px_0_2.5px_0] inline-block break-words font-['Poppins'] font-normal text-[15px] leading-[1] text-[#FFFFFF]">
                Can you write a short paragraph for
              </div>
            </div>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
} 
export default CodeMate;