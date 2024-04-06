import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const TermServiceContent = () => {
    return (
        <section>
            <Container fluid className="privacypolicy-section landing-page-bg d-flex align-items-center">
                <Row className='justify-content-center align-items-center'>
                    <h1 className="section-title">Terms of Service</h1>
                    <Col xs={12} md={8}>
                        <h2 className="section-sub-title">Welcome to Global Nation!</h2>

                        <p className="text-white"><strong>Introduction.</strong>  Thank you for using our platform and the products, services and tools that we offer (collectively, the “Service”). These Terms of Service form an agreement between you and us.  As with any agreement you should read it carefully and understand it before agreeing to its terms.  By using the Service, you represent that you have read, understood, and accept all of the terms and conditions contained herein (the “User Agreement”), as well as our Privacy Policy  (link).</p>

                        <p className="text-white"><strong>Our Company.</strong> We are Global Nation, Inc.  We refer to ourselves and our affiliated companies as 'Global Nation', 'we', 'us' and 'our' throughout the User Agreement.</p>

                        <h2 className="section-sub-title">General Use</h2>
                        <p className="text-white">You must be at least 13 years of age to use the Service and to create an account (an “Account”). If you are under 13 years of age you may use the Service only with the permission of your parents or legal guardian.</p>
                        <p className="text-white">If you are at least 13 years of age but not yet 18 you may create an Account with the help of your parent or legal guardian.  They must read this User Agreement with you and agree to the terms and conditions.</p>
                        <p className="text-white">If you are a parent or legal guardian of minor using the Service or creating an Account, you are responsible for your child’s activity on the Service and managing and supervising the content that they are viewing and the materials that they are posting. All references to "you" in this User Agreement include the parent or legal guardian of the minor using the Service.</p>

                        <h2 className="section-sub-title">Creating an Account</h2>
                        <p className="text-white">In order to access some of the features of the Service you need to create an Account.  The information required to create an account may include personally identifiable information such as you name, address, email address, telephone number, date of birth, bank account, credit card or other payment information.  Our information collection and use policies with respect to the privacy of your account information are set forth in our <a href="/privacy-policy">Privacy Policy</a></p>
                        <p className="text-white">Your Account will have unique login credentials, which may only be used by you.  You must keep your credentials secret. You are solely responsible for managing and maintaining the security of any information relating to such credentials. You agree that we shall not be responsible for any unauthorized access to the Service or any resulting harm you may suffer.</p>
                        <p className="text-white">By creating an Account, you grant to us and to all other persons and entities involved in the operation of the Service the right to use, store, monitor, retrieve and transmit your account information in connection with the operation of the Service and as otherwise provided herein.</p>

                        <h2 className="section-sub-title">Communication</h2>
                        <p className="text-white">Any and all communications from us may be provided to you via electronic mail at the address you provided when creating an Account or when emailing us. You may communicate with us at <a href="mailto:support@globalnation.com">support@globalnation.com</a></p>

                        <h2 className="section-sub-title">Creating and Selling Content/Seller Accounts</h2>
                        <p className="text-white">We encourage you to create content (“Your Content”) and hope that the Service will enable you to monetize Your Content, but we cannot and do not guarantee that you will receive any income from Your Content.   You set the price for Your Content. If you want to sell your content you will need to sign up for a seller account</p>

                        <h2 className="section-sub-title">Commissions</h2>
                        <p className="text-white">The sale of Your Content on the Service is subject to a commission  by Global Nation.  Global Nation’s commission rates is found here</p>

                        <h2 className="section-sub-title">Payments to You</h2> 
                        <p className="text-white">After the deduction of our commission and out of pocket expenses, including, third party processing fees, the remaining proceeds from the sale of Your Content will be deposited in your bank account.  You are responsible for paying all other persons who may be entitled to payment for the use of Your Content. </p>

                        <h2 className="section-sub-title">Ownership of Your Content</h2>
                        <p className="text-white">You own Your Content.  Your Content must be original to you and may not infringe on any other persons rights.  You must have all rights necessary to use Your Content.  For example, if you are using someone else’s music in Your Content you must have permission from the owner of that music to use it.  The same is true for photographs or videos of other people – you must have their permission to use their likeness in Your Content.  We reserve the right to takedown Your Content if we believe that it is infringing any other person’s rights. </p>

                        <h2 className="section-sub-title">License to Use Your Content</h2>
                        <p className="text-white">You give us the limited, non-exclusive right and license to use Your Content on the Service and to promote the Service.  This includes the right to reproduce, display, distribute and make derivative works of Your Content, use your name and any likeness you have posted on the Service, so that we can operate, provide, and promote the Service.</p>

                        <h2 className="section-sub-title">Third Party Content</h2>
                        <p className="text-white">While using the Service, you may view content or services provided by other creators or third parties, including links to web pages and services of such parties</p>
                        <p className="text-white">We do not control, endorse or adopt any Third Party Content and have no responsibility for Third Party Content, including, without limitation, material that may be misleading, incomplete, erroneous, offensive, indecent or otherwise objectionable to you. </p>
                        <p className="text-white">In addition, your dealings or correspondence with such third parties are solely between you and the third party. We are not responsible or liable for any loss or damage of any sort incurred as a result of any such dealings and your use of Third Party Content is at your own risk.</p>
                        <p className="text-white">You agree that you will not make copies of Third Party Content or sell, distribute, display or make derivative works from Third Party Content without the Seller’s prior written consent.</p>

                        <h2 className="section-sub-title">Our Tools and Content</h2>
                        <p className="text-white">As part of the Service we may make certain software tools, music files, photo and video files, available to you to create content (collectively "Our Tools").  We own all rights in Our Tools, but give you a personal, non-assignable, limited, non-exclusive, fully revocable, worldwide, license to use Our Tools solely in connection with and as embodied in Your Content.</p>
                        <p className="text-white">Without limiting the generality of the foregoing:</p>
                        <ul>
                            <li className="text-white">You may not reverse engineer or extract the source code from Our Tools.</li>
                            <li className="text-white">You may not resell or provide access to Our Tools, use of Our Tools separately outside of the Service, make them part of another platform or application, or use them for any commercial purposes (except as embodied in Your Content).</li>
                        </ul>
                        <p className="text-white">Any rights not expressly granted herein to use the Our Tools or the Service are reserved by us.</p>
                        <p className="text-white">Some software used in Our Tools may be offered under an open source license that we make available to you. There may be provisions in an open source license that expressly override some of these terms, so please be sure to read those licenses.</p>

                        <h2 className="section-sub-title">Acceptable Use of the Service and Restrictions</h2>
                        <p className="text-white">You are solely responsible for your conduct while using the Service. You agree that you will not:</p>
                        <ul>
                            <li className="text-white">Use the Service in any manner that could interfere with, disrupt, negatively affect or inhibit other users from fully enjoying the Service, or that could damage, disable, overburden or impair the functioning of our Service in any manner</li>
                            <li className="text-white">Use the Service to pay for, support or otherwise engage in any illegal activities, including, but not limited to illegal gambling, fraud, money laundering, or terrorist activities</li>
                            <li className="text-white">Use any robot, spider, crawler, scraper or other automated means or interface not provided by us to access our Service or to extract data.</li>
                            <li className="text-white">Use or attempt to use another person’s credentials without authorization</li>
                            <li className="text-white">Attempt to circumvent any content filtering techniques we employ, or attempt to access any service or area of our Service that you are not authorized to access</li>
                            <li className="text-white">Introduce to the Service any virus, Trojan, worms, logic bombs or other harmful material</li>
                            <li className="text-white">Reverse engineer or extract the source code of any of the Service</li>
                            <li className="text-white">Develop any third-party applications that interact with our Service without our prior written consent</li>
                            <li className="text-white">Provide false, inaccurate, or misleading information or encourage or induce any other person to engage in any of the activities prohibited under this Section</li>
                            <li className="text-white">Post any material which is unlawful, defamatory, libelous, slanderous, pornographic, abusive, threatening, harassing, harmful, creates a risk of harm, loss, physical or mental injury, emotional distress, death, disability, disfigurement, or physical or mental illness to yourself, to any other person, or which encourages conduct that would be considered a criminal offense, give rise to civil liability, violate any law or any right of privacy or publicity, or is otherwise inappropriate.</li>
                        </ul>

                        <h2 className="section-sub-title">Original Content Warranties and Representations</h2>
                        <p className="text-white">You warrant and represent that Your Content is original to you; that it does not infringe the rights of any third party, including, without limitation, the copyright, trademark rights, rights of privacy or rights of publicity, and that it is not defamatory. If you used third party content in Your Content you warrant and represent that the third party content is duly licensed and used with the permission of the third party owner or licensor or is in the public domain.</p>
                        

                        <h2 className="section-sub-title">Indemnity to Us</h2>
                        <p>You agree to indemnify us and our affiliates, employees, officers and directors, and hold us and them harmless from and against any and all damages, claims, costs or expenses, including our attorney’s fees and costs, arising out of or connected with Your Content, use of the Service and/or your breach any warranty, representation or promise made in this User Agreement.</p>
                        

                        <h2 className="section-sub-title">Account Suspension and Termination</h2>
                        <p className="text-white">You may stop using the Service at any time.  You may close your Account at any time.  We may also close your Account or shut down the Service for any reason or no reason at all in our sole discretion.  If you or we close your account, Your Content will no longer be available on the Service.  You should make a copy of Your Content prior to closing your Account.  If we close your Account you should make a copy of Your Content promptly thereafter. If you do not promptly make a copy of Your Content, it may be deleted.  We have no responsibility for any materials, including Your Content, that are deleted.  In the event your Account is closed, for any reason, we shall not be obligated to refund any money paid by your for a subscription, whether there is still time left on the subscription or not. </p>
                        

                        <h2 className="section-sub-title">Accuracy of Information</h2>
                        <p className="text-white">We endeavor to verify the accuracy of any information displayed, supplied, passing through or originating from the Service, but such information may not always be accurate or current. You should independently verify all information before relying on it, and any decisions or actions taken based upon such information are your sole responsibility.</p>

                        <h2 className="section-sub-title">Legal Terms</h2>
                        <h2 className="section-sub-title">Warranty Disclaimer</h2>
                        <p className="text-white">OTHER THAN AS EXPRESSLY STATED IN THIS AGREEMENT OR AS REQUIRED BY LAW, THE SERVICE IS PROVIDED “AS IS” AND WE DO NOT MAKE ANY SPECIFIC COMMITMENTS OR WARRANTIES ABOUT THE SERVICE. FOR EXAMPLE, WE DON’T MAKE ANY WARRANTIES ABOUT: (A) THE CONTENT PROVIDED THROUGH THE SERVICE; (B) THE SPECIFIC FEATURES OF THE SERVICE, OR ITS ACCURACY, RELIABILITY, AVAILABILITY, OR ABILITY TO MEET YOUR NEEDS; OR (C) THAT ANY CONTENT YOU SUBMIT WILL BE ACCESSIBLE ON THE SERVICE.</p>

                        <h2 className="section-sub-title">Limitation of Liability</h2>
                        <p className="text-white">EXCEPT AS REQUIRED BY APPLICABLE LAW, GLOBAL NATION, ITS AFFILIATES AND SERVICE PROVIDERS, OR ANY OF THEIR RESPECTIVE OFFICERS, DIRECTORS, AGENTS, EMPLOYEES OR REPRESENTATIVES, SHALL NOT BE LIABLE FOR DAMAGES IN CONNECTION WITH OR FOR:</p>
                        <p className="text-white"><strong>A.</strong> ANY LOST PROFITS OR ANY SPECIAL, INCIDENTAL, INDIRECT, INTANGIBLE, CONSEQUENTIAL OR PUNITIVE DAMAGES, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN CONNECTION WITH AUTHORIZED OR UNAUTHORIZED USE OF THE SERVICES, OR THIS AGREEMENT, EVEN IF AN AUTHORIZED REPRESENTATIVE OF GLOBAL NATION HAS BEEN ADVISED OF, KNEW OF, OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                        <p className="text-white"><strong>B.</strong> THE MALFUNCTION, UNEXPECTED FUNCTION OR UNINTENDED FUNCTION OF ANY COMPUTER OR NETWORK</p>
                        <p className="text-white"><strong>C.</strong> ERRORS, INACCURACIES OR MISTAKES ON THE SERVICE</p>
                        <p className="text-white"><strong>D.</strong> PERSONAL INJURY OR PROPERTY DAMAGE RESULTING FROM YOUR USE OF THE SERVICE</p>
                        <p className="text-white"><strong>E.</strong> CONTENT SUBMITTED BY YOU OR ANY OTHER USER</p>
                        <p className="text-white"><strong>F.</strong> VIRUSES OR MALICIOUS CODE</p>
                        <p className="text-white"><strong>G.</strong> INTERRUPTION OR CESSATION OF THE SERVICE</p>
                        <p className="text-white"><strong>H.</strong> THE REMOVAL OR DELETION OF ANY CONTENT</p>
                        <p className="text-white"><strong>I.</strong> FORCE MAJEURE</p>
                        <p className="text-white"><strong>J.</strong> ANY CHANGE IN LAW, REGULATION OR POLICY</p>

                        <h2 className="section-sub-title">Total Liability</h2>
                        <p className="text-white">EXCEPT WHERE PROHIBITED BY LAW, OUR DAMAGES SHALL BE LIMITED TO THE GREATER OF  (A) THE AMOUNT OF MONEY PAID BY YOU TO US FOR THE IMMEDIATELY PRECEDING 12 MONTHS OR (B) USD $500</p>

                        <h2 className="section-sub-title">Taxes</h2>
                        <p className="text-white">It is your responsibility to determine what, if any, taxes apply due to your use of the Service, and it is your responsibility to report and remit the correct tax to the appropriate tax authority. Global Nation may issue you a 1099-MISC or other appropriate form and report your earning to the Internal Revenue Service or other taxing authorities.  </p>

                        <h2 className="section-sub-title">Severability, Reformation</h2>
                        <p className="text-white">In the event that any provision of this User Agreement is unenforceable under applicable law, the validity or enforceability of the remaining provisions will not be affected. To the extent any provision of this User Agreement is judicially determined to be unenforceable, a court of competent jurisdiction may reform any such provision to make it enforceable. The provisions of this User Agreement will, where possible, be interpreted so as to sustain its legality and enforceability</p>

                        <h2 className="section-sub-title">Assignment</h2>
                        <p className="text-white">This User Agreement shall be binding on your successors, heirs, personal representatives, and assigns. You may not assign or transfer any of your rights or obligations under this User Agreement without prior written consent of Global Nation, which may be withheld in Global Nation’s sole discretion. We may assign rights or delegate duties, in whole or in part, under this User Agreement in our sole discretion</p>

                        <h2 className="section-sub-title">Relationship of the Parties</h2>
                        <p className="text-white">Nothing in this User Agreement is intended to, nor shall create any partnership, joint venture, agency, consultancy or trusteeship. You and Global Nation are independent contractors for purposes of this User Agreement.</p>

                        <h2 className="section-sub-title">Entire Agreement</h2>
                        <p className="text-white">This User Agreement constitutes the entire agreement among the Parties with respect to the subject matter described herein and shall supersede all prior agreements and understandings, written or oral, among the Parties</p>

                        <h2 className="section-sub-title">Modification and Updates</h2>
                        <p className="text-white">We may from time to time update and modify this User Agreement and all such updates and modifications shall be deemed incorporated in this User Agreement as of the date posted.  It is your responsibility to monitor Services for any such updates and modifications.</p>

                        <h2 className="section-sub-title">Governing Law</h2>
                        <p className="text-white">This User Agreement and all claims arising out of this User Agreement are governed by the laws of the State of New York, applicable to contracts entered into and wholly performed in the State of New York, without regard to conflict of laws principles.</p>
                        <p className="text-white">Any disputes between you and us arising from your use of the Service or the Service (whether arising out of contract, tort, statute or any other manner) shall be resolved in the courts (State and Federal) of the State of New York, located in New York County, which shall have exclusive jurisdiction over such matters.  You agree to submit to the jurisdiction of the State of New York and will not assert any defense thereto, including, without limitation, that New York is an inconvenient forum. </p>

                        <h2 className="section-sub-title">Waiver of Jury Trial</h2>
                        <p className="text-white">EACH PARTY HEREBY KNOWINGLY, VOLUNTARILY, IRREVOCABLY AND UNCONDITIONALLY WAIVES ANY RIGHT IT MAY HAVE TO A TRIAL BY JURY IN RESPECT OF ANY LITIGATION DIRECTLY OR INDIRECTLY ARISING OUT OF, OR RELATING TO, THIS USER AGREEMENT.</p>

                        <h2 className="section-sub-title">Waiver of Class Action</h2>
                        <p className="text-white">EXCEPT WHERE PROHIBITED BY APPLICABLE LAW, YOU AGREE THAT ANY CLAIM YOU MAY HAVE AGAINST US SHALL BE BROUGHT INDIVIDUALLY AND YOU SHALL NOT JOIN SUCH CLAIM WITH CLAIMS OF ANY OTHER PERSON OR ENTITY OR BRING, JOIN, OR PARTICIPATE IN A CLASS ACTION AGAINST US.</p>

                        <h2 className="section-sub-title">Limitation on Legal Action</h2>
                        <p className="text-white">YOU AGREE THAT ANY CAUSE OF ACTION ARISING OUT OF OR RELATED TO THE SERVICES MUST COMMENCE WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES. OTHERWISE, SUCH CAUSE OF ACTION IS PERMANENTLY BARRED.</p>

                        <h2 className="section-sub-title">Feedback</h2>
                        <p className="text-white">Global Nation strives to improve its Service to address feedback. If you have ideas or suggestions regarding improvements or additions to the Service, we would like to hear them; however, any submission shall be subject to this User Agreement.</p>
                        <p className="text-white">Under no circumstances shall disclosure of any idea or feedback, or any related material to Global Nation be subject to any obligation of confidentiality or expectation of compensation.</p>
                        <p className="text-white">By submitting an idea or feedback or any related material that would be subject to intellectual property rights, you grant to Global Nation, with respect to such feedback and materials (a “Work”), a non-exclusive, perpetual, irrevocable, worldwide, royalty-free, sublicensable, license to use and authorize others to use the Work, in whole or in part, for any purpose whatsoever.</p>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TermServiceContent;