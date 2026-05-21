// // import React, {
// //   useState,
// //   useRef,
// //   useEffect,
// //   ChangeEvent,
// //   FormEvent,
// // } from "react";
// // import OMSVersionFooter from "../components/OMSVersionFooter";

// // // ---------- TYPE DEFINITIONS ----------
// // interface Step {
// //   id: string;
// //   title: string;
// // }

// // interface OrgSubTypeMap {
// //   [key: string]: string[];
// // }

// // interface IfscBranchMap {
// //   [key: string]: string;
// // }

// // interface StateCityMap {
// //   [key: string]: string[];
// // }

// // interface AdditionalOrg {
// //   id: number;
// // }

// // interface OthersDocEntry {
// //   id: number;
// //   name: string;
// //   fileName: string;
// //   file: File | null;
// // }

// // // ---------- CONSTANTS & MOCK DATA ----------
// // const STEPS: Step[] = [
// //   { id: "panel-personal", title: "Personal Details" },
// //   { id: "panel-verification-banking", title: "Verification & Banking Details" },
// //   { id: "panel-professional", title: "Educational & Professional Details" },
// //   { id: "panel-address", title: "Address Details" },
// //   { id: "panel-documents", title: "Upload Section" },
// //   { id: "panel-selfie", title: "Live Selfie Verification" },
// // ];

// // const ORG_SUB_TYPES_MAP: OrgSubTypeMap = {
// //   "Institute / College / School": ["Government", "Private"],
// //   University: ["Government", "Private"],
// //   "Public Sector": ["State", "Central"],
// // };

// // const IFSC_BRANCH_MAP: IfscBranchMap = {
// //   SBIN0001234: "SBI Connaught Place, New Delhi",
// //   SBIN0002345: "SBI Bandra West, Mumbai",
// //   SBIN0003456: "SBI MG Road, Bangalore",
// //   SBIN0004567: "SBI Anna Salai, Chennai",
// //   SBIN0005678: "SBI Hazratganj, Lucknow",
// //   HDFC0001234: "HDFC Nariman Point, Mumbai",
// //   HDFC0002345: "HDFC Cyber City, Gurugram",
// //   HDFC0003456: "HDFC Koramangala, Bangalore",
// //   HDFC0004567: "HDFC Salt Lake, Kolkata",
// //   HDFC0005678: "HDFC Banjara Hills, Hyderabad",
// //   ICIC0001234: "ICICI Lower Parel, Mumbai",
// //   ICIC0002345: "ICICI Sector 17, Chandigarh",
// //   ICIC0003456: "ICICI Ashok Nagar, Chennai",
// //   ICIC0004567: "ICICI Civil Lines, Jaipur",
// //   ICIC0005678: "ICICI Gomti Nagar, Lucknow",
// //   KKBK0001234: "Kotak BKC, Mumbai",
// //   KKBK0002345: "Kotak Indiranagar, Bangalore",
// //   KKBK0003456: "Kotak Jubilee Hills, Hyderabad",
// //   UTIB0001234: "Axis Nehru Place, New Delhi",
// //   UTIB0002345: "Axis FC Road, Pune",
// //   UTIB0003456: "Axis Alwarpet, Chennai",
// //   PUNB0001234: "PNB Chandni Chowk, Delhi",
// //   PUNB0002345: "PNB Civil Lines, Allahabad",
// //   PUNB0003456: "PNB Station Road, Patna",
// // };

// // const STATE_CITY_MAP: StateCityMap = {
// //   Maharashtra: [
// //     "Mumbai",
// //     "Pune",
// //     "Nagpur",
// //     "Nashik",
// //     "Aurangabad",
// //     "Solapur",
// //     "Amravati",
// //     "Thane",
// //   ],
// //   Gujarat: [
// //     "Ahmedabad",
// //     "Surat",
// //     "Vadodara",
// //     "Rajkot",
// //     "Bhavnagar",
// //     "Jamnagar",
// //     "Gandhinagar",
// //   ],
// //   Karnataka: [
// //     "Bangalore",
// //     "Mysore",
// //     "Hubli",
// //     "Mangalore",
// //     "Belgaum",
// //     "Dharwad",
// //     "Gulbarga",
// //   ],
// //   "Tamil Nadu": [
// //     "Chennai",
// //     "Coimbatore",
// //     "Madurai",
// //     "Tiruchirappalli",
// //     "Salem",
// //     "Tirunelveli",
// //     "Erode",
// //   ],
// //   Delhi: [
// //     "New Delhi",
// //     "North Delhi",
// //     "South Delhi",
// //     "East Delhi",
// //     "West Delhi",
// //   ],
// //   "Uttar Pradesh": [
// //     "Lucknow",
// //     "Kanpur",
// //     "Ghaziabad",
// //     "Agra",
// //     "Meerut",
// //     "Varanasi",
// //     "Prayagraj",
// //   ],
// //   "West Bengal": [
// //     "Kolkata",
// //     "Howrah",
// //     "Durgapur",
// //     "Asansol",
// //     "Siliguri",
// //     "Kharagpur",
// //   ],
// //   Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga"],
// //   "Andhra Pradesh": [
// //     "Visakhapatnam",
// //     "Vijayawada",
// //     "Guntur",
// //     "Nellore",
// //     "Kurnool",
// //     "Rajahmundry",
// //   ],
// // };


// // const updateFieldColor = (el: HTMLSelectElement | HTMLInputElement) => {
// //   if (el.value !== "") {
// //     el.style.color = "#1a2b4a";
// //   } else {
// //     el.style.color = "#aaa";
// //   }
// // };


// // interface CustomMultiSelectProps {
// //   cities: string[];
// //   selectedCities: string[];
// //   onToggleCity: (city: string) => void;
// //   maxSelect?: number;
// // }

// // const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
// //   cities,
// //   selectedCities,
// //   onToggleCity,
// //   maxSelect = 3,
// // }) => {
// //   const [isOpen, setIsOpen] = useState<boolean>(false);
// //   const [searchTerm, setSearchTerm] = useState<string>("");
// //   const containerRef = useRef<HTMLDivElement>(null);

// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (
// //         containerRef.current &&
// //         !containerRef.current.contains(event.target as Node)
// //       ) {
// //         setIsOpen(false);
// //       }
// //     };
// //     document.addEventListener("click", handleClickOutside);
// //     return () => document.removeEventListener("click", handleClickOutside);
// //   }, []);

// //   const filteredCities = cities.filter((city) =>
// //     city.toLowerCase().includes(searchTerm.toLowerCase()),
// //   );

// //   const removeCity = (city: string) => {
// //     onToggleCity(city);
// //   };

// //   return (
// //     <div className="custom-multi-select relative w-full" ref={containerRef}>
// //       <div
// //         className={`cms-header min-h-[44px] border-[1.5px] border-[#e0e0e0] bg-white flex items-center justify-between px-[14px] py-1 cursor-pointer transition-colors ${isOpen ? "border-[#003366] rounded-t-none" : ""}`}
// //         onClick={() => setIsOpen(!isOpen)}
// //       >
// //         <div className="cms-tags flex flex-wrap gap-1.5 flex-1 items-center min-h-[32px]">
// //           {selectedCities.length === 0 ? (
// //             <span className="cms-placeholder text-[#aaa] text-[13px]">
// //               Select all options
// //             </span>
// //           ) : (
// //             selectedCities.map((city) => (
// //               <div
// //                 key={city}
// //                 className="cms-tag bg-[#003366] text-white px-2 py-1 rounded text-[13px] flex items-center gap-1.5 font-medium"
// //               >
// //                 {city}
// //                 <i
// //                   className="not-italic text-base leading-[0.8] cursor-pointer hover:text-[#f87171]"
// //                   onClick={(e) => {
// //                     e.stopPropagation();
// //                     removeCity(city);
// //                   }}
// //                 >
// //                   ×
// //                 </i>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //         <div className="cms-arrow text-[#94a3b8] text-xs ml-2">▼</div>
// //       </div>
// //       {isOpen && (
// //         <div className="cms-dropdown absolute top-full left-0 w-full bg-white border-[1.5px] border-[#003366] border-t-0 shadow-lg z-10 flex flex-col">
// //           <div className="cms-search p-2 border-b border-[#f1f5f9]">
// //             <input
// //               type="text"
// //               className="field-input h-9 px-2.5 rounded text-[13px] border border-[#e2e8f0] w-full focus:border-[#003366] focus:outline-none"
// //               placeholder="Search city..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               onClick={(e) => e.stopPropagation()}
// //             />
// //           </div>
// //           <div className="cms-options max-h-[200px] overflow-y-auto py-1">
// //             {filteredCities.length === 0 ? (
// //               <div className="px-3 py-3 text-[#94a3b8] text-[13px] text-center">
// //                 No cities found
// //               </div>
// //             ) : (
// //               filteredCities.map((city) => {
// //                 const isSelected = selectedCities.includes(city);
// //                 const isDisabled =
// //                   !isSelected && selectedCities.length >= maxSelect;
// //                 return (
// //                   <div
// //                     key={city}
// //                     className={`cms-option px-3 py-2 flex items-center gap-2.5 cursor-pointer text-sm text-[#475569] hover:bg-[#f8fafc] hover:text-[#003366] ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
// //                     onClick={() => !isDisabled && onToggleCity(city)}
// //                   >
// //                     <input
// //                       type="checkbox"
// //                       checked={isSelected}
// //                       readOnly
// //                       tabIndex={-1}
// //                       className="w-4 h-4 accent-[#003366]"
// //                     />
// //                     <span>{city}</span>
// //                   </div>
// //                 );
// //               })
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // // ---------- OTP MODAL COMPONENT ----------
// // interface OtpModalProps {
// //   isOpen: boolean;
// //   title: string;
// //   description: string;
// //   onVerify: (otp: string) => void;
// //   onCancel: () => void;
// // }

// // const OtpModal: React.FC<OtpModalProps> = ({
// //   isOpen,
// //   title,
// //   description,
// //   onVerify,
// //   onCancel,
// // }) => {
// //   const [otp, setOtp] = useState<string>("");

// //   if (!isOpen) return null;

// //   const handleVerify = () => {
// //     if (otp.trim()) {
// //       onVerify(otp);
// //       setOtp("");
// //     } else {
// //       alert("Please enter the OTP.");
// //     }
// //   };

// //   return (
// //     <div className="modal-overlay fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center">
// //       <div className="modal-dialog bg-white w-[400px] max-w-[90%] rounded-lg p-6 shadow-lg">
// //         <h3 className="modal-title text-xl text-[#003366] font-source-sans font-bold mb-2">
// //           {title}
// //         </h3>
// //         <p className="modal-desc text-sm text-[#666] mb-5 font-roboto">
// //           {description}
// //         </p>
// //         <div className="modal-body">
// //           <input
// //             type="text"
// //             className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white mb-4"
// //             placeholder="Enter OTP (XXXX)"
// //             value={otp}
// //             onChange={(e) => setOtp(e.target.value)}
// //           />
// //           <button
// //             type="button"
// //             className="create-btn w-full h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
// //             onClick={handleVerify}
// //           >
// //             Verify
// //           </button>
// //           <button
// //             type="button"
// //             className="inline-btn w-full bg-transparent text-[#666] border-none mt-2 text-sm font-roboto cursor-pointer"
// //             onClick={onCancel}
// //           >
// //             Cancel
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // ---------- MAIN COMPONENT ----------
// // const SignupObserver: React.FC = () => {
// //   // ----- Form State -----
// //   // Personal Details
// //   const [firstName, setFirstName] = useState<string>("");
// //   const [lastName, setLastName] = useState<string>("");
// //   const [email, setEmail] = useState<string>("");
// //   const [emailVerified, setEmailVerified] = useState<boolean>(false);
// //   const [dob, setDob] = useState<string>("");
// //   const [gender, setGender] = useState<string>("");
// //   const [nationality, setNationality] = useState<string>("");
// //   const [phone, setPhone] = useState<string>("");
// //   const [phoneVerified, setPhoneVerified] = useState<boolean>(false);
// //   const [altPhone, setAltPhone] = useState<string>("");

// //   // Verification & Banking
// //   const [aadhar, setAadhar] = useState<string>("");
// //   const [aadharVerified, setAadharVerified] = useState<boolean>(false);
// //   const [pan, setPan] = useState<string>("");
// //   const [bankName, setBankName] = useState<string>("");
// //   const [otherBankName, setOtherBankName] = useState<string>("");
// //   const [ifscCode, setIfscCode] = useState<string>("");
// //   const [branchName, setBranchName] = useState<string>("");
// //   const [accountNumber, setAccountNumber] = useState<string>("");

// //   // Educational & Professional
// //   const [highestQualification, setHighestQualification] = useState<string>("");
// //   const [instituteUniversity, setInstituteUniversity] = useState<string>("");
// //   const [employmentStatus, setEmploymentStatus] = useState<
// //     "working" | "retired"
// //   >("working");
// //   // Working fields
// //   const [currOrgType, setCurrOrgType] = useState<string>("");
// //   const [currOrgSubType, setCurrOrgSubType] = useState<string>("");
// //   const [currOrgName, setCurrOrgName] = useState<string>("");
// //   const [currPost, setCurrPost] = useState<string>("");
// //   const [currFromMonth, setCurrFromMonth] = useState<string>("");
// //   const [currFromYear, setCurrFromYear] = useState<string>("");
// //   // Retired fields
// //   const [lastOrgType, setLastOrgType] = useState<string>("");
// //   const [lastOrgSubType, setLastOrgSubType] = useState<string>("");
// //   const [lastOrgName, setLastOrgName] = useState<string>("");
// //   const [lastPost, setLastPost] = useState<string>("");
// //   const [dateOfRetirement, setDateOfRetirement] = useState<string>("");
// //   // Additional Organisations
// //   const [additionalOrgs, setAdditionalOrgs] = useState<AdditionalOrg[]>([]);
// //   const [additionalOrgsData, setAdditionalOrgsData] = useState<any[]>([]);

// //   // Address Details
// //   const [resState, setResState] = useState<string>("");
// //   const [resCity, setResCity] = useState<string>("");
// //   const [resPin, setResPin] = useState<string>("");
// //   const [resAddr1, setResAddr1] = useState<string>("");
// //   const [resAddr2, setResAddr2] = useState<string>("");
// //   const [prefState, setPrefState] = useState<string>("");
// //   const [selectedCities, setSelectedCities] = useState<string[]>([]);
// //   const [currOrgState, setCurrOrgState] = useState<string>("");
// //   const [currOrgCity, setCurrOrgCity] = useState<string>("");
// //   const [currOrgPin, setCurrOrgPin] = useState<string>("");
// //   const [currOrgAddr1, setCurrOrgAddr1] = useState<string>("");
// //   const [currOrgAddr2, setCurrOrgAddr2] = useState<string>("");
// //   const [lastOrgState, setLastOrgState] = useState<string>("");
// //   const [lastOrgCity, setLastOrgCity] = useState<string>("");
// //   const [lastOrgPin, setLastOrgPin] = useState<string>("");
// //   const [lastOrgAddr1, setLastOrgAddr1] = useState<string>("");
// //   const [lastOrgAddr2, setLastOrgAddr2] = useState<string>("");

// //   // Upload Section
// //   const [eduProofFile, setEduProofFile] = useState<File | null>(null);
// //   const [eduProofName, setEduProofName] = useState<string>("");
// //   const [workingProofType, setWorkingProofType] = useState<string>("");
// //   const [empProofFile, setEmpProofFile] = useState<File | null>(null);
// //   const [empProofName, setEmpProofName] = useState<string>("");
// //   const [lastOrgProofType, setLastOrgProofType] = useState<string>("");
// //   const [lastCertFile, setLastCertFile] = useState<File | null>(null);
// //   const [lastCertName, setLastCertName] = useState<string>("");
// //   const [aadharUploadFile, setAadharUploadFile] = useState<File | null>(null);
// //   const [aadharUploadName, setAadharUploadName] = useState<string>("");
// //   const [panUploadFile, setPanUploadFile] = useState<File | null>(null);
// //   const [panUploadName, setPanUploadName] = useState<string>("");
// //   const [bankProofFile, setBankProofFile] = useState<File | null>(null);
// //   const [bankProofName, setBankProofName] = useState<string>("");
// //   const [othersDocs, setOthersDocs] = useState<OthersDocEntry[]>([
// //     { id: Date.now(), name: "", fileName: "", file: null },
// //   ]);

// //   // Selfie
// //   const [selfieCaptured, setSelfieCaptured] = useState<boolean>(false);
// //   const [cameraActive, setCameraActive] = useState<boolean>(false);
// //   const videoRef = useRef<HTMLVideoElement>(null);
// //   const canvasRef = useRef<HTMLCanvasElement>(null);
// //   const cameraStreamRef = useRef<MediaStream | null>(null);

// //   // UI State
// //   const [currentStep, setCurrentStep] = useState<number>(0);
// //   const [showReview, setShowReview] = useState<boolean>(false);
// //   const [tcChecked, setTcChecked] = useState<boolean>(true);

// //   // OTP Modal State
// //   const [otpModalOpen, setOtpModalOpen] = useState<boolean>(false);
// //   const [otpContext, setOtpContext] = useState<
// //     "email" | "mobile" | "aadhar" | null
// //   >(null);
// //   const [otpTarget, setOtpTarget] = useState<string>("");

// //   // ----- Effects -----
// //   // IFSC lookup effect
// //   useEffect(() => {
// //     if (!ifscCode) {
// //       setBranchName("");
// //       return;
// //     }
// //     const code = ifscCode.trim().toUpperCase();
// //     const branch = IFSC_BRANCH_MAP[code];
// //     if (branch) {
// //       setBranchName(branch);
// //     } else {
// //       setBranchName("");
// //     }
// //   }, [ifscCode]);

// //   // Disable future date for retirement
// //   useEffect(() => {
// //     const today = new Date().toISOString().split("T")[0];
// //     const retirementInput = document.getElementById(
// //       "dateOfRetirement",
// //     ) as HTMLInputElement;
// //     if (retirementInput) {
// //       retirementInput.setAttribute("max", today);
// //     }
// //   }, []);

// //   // Update select colors
// //   useEffect(() => {
// //     const selects = document.querySelectorAll('select, input[type="date"]');
// //     selects.forEach((el) => {
// //       if (el instanceof HTMLSelectElement || el instanceof HTMLInputElement) {
// //         updateFieldColor(el);
// //         el.addEventListener("change", () => updateFieldColor(el));
// //       }
// //     });
// //   }, [currentStep]);

// //   // ----- Handlers -----
// //   const handleNextStep = () => {
// //     if (currentStep < STEPS.length - 1) {
// //       setCurrentStep(currentStep + 1);
// //       window.history.pushState({ step: currentStep + 1 }, "", "");
// //       document
// //         .querySelector(".form-area")
// //         ?.scrollIntoView({ behavior: "smooth" });
// //     }
// //   };

// //   const handleFileChange = (
// //     e: ChangeEvent<HTMLInputElement>,
// //     setFile: React.Dispatch<React.SetStateAction<File | null>>,
// //     setName: React.Dispatch<React.SetStateAction<string>>,
// //   ) => {
// //     if (e.target.files && e.target.files.length > 0) {
// //       const file = e.target.files[0];
// //       setFile(file);
// //       setName(file.name);
// //     } else {
// //       setFile(null);
// //       setName("");
// //     }
// //   };

// //   const handleAddOthersDoc = () => {
// //     setOthersDocs([
// //       ...othersDocs,
// //       { id: Date.now(), name: "", fileName: "", file: null },
// //     ]);
// //   };

// //   const handleRemoveOthersDoc = (id: number) => {
// //     setOthersDocs(othersDocs.filter((doc) => doc.id !== id));
// //   };

// //   const handleOthersDocNameChange = (id: number, name: string) => {
// //     setOthersDocs(
// //       othersDocs.map((doc) => (doc.id === id ? { ...doc, name } : doc)),
// //     );
// //   };

// //   const handleOthersDocFileChange = (
// //     id: number,
// //     file: File | null,
// //     fileName: string,
// //   ) => {
// //     setOthersDocs(
// //       othersDocs.map((doc) =>
// //         doc.id === id ? { ...doc, file, fileName } : doc,
// //       ),
// //     );
// //   };

// //   const handleAddLastOrg = () => {
// //     const newId = Date.now();
// //     setAdditionalOrgs([...additionalOrgs, { id: newId }]);
// //     setAdditionalOrgsData([
// //       ...additionalOrgsData,
// //       {
// //         id: newId,
// //         orgType: "",
// //         orgSubType: "",
// //         orgName: "",
// //         post: "",
// //         fromMonth: "",
// //         fromYear: "",
// //         toMonth: "",
// //         toYear: "",
// //       },
// //     ]);
// //   };

// //   const handleRemoveLastOrg = (id: number) => {
// //     setAdditionalOrgs(additionalOrgs.filter((org) => org.id !== id));
// //     setAdditionalOrgsData(additionalOrgsData.filter((data) => data.id !== id));
// //   };

// //   const updateAdditionalOrgData = (
// //     id: number,
// //     field: string,
// //     value: string,
// //   ) => {
// //     setAdditionalOrgsData(
// //       additionalOrgsData.map((data) =>
// //         data.id === id ? { ...data, [field]: value } : data,
// //       ),
// //     );
// //   };

// //   const handleToggleCity = (city: string) => {
// //     if (selectedCities.includes(city)) {
// //       setSelectedCities(selectedCities.filter((c) => c !== city));
// //     } else if (selectedCities.length < 3) {
// //       setSelectedCities([...selectedCities, city]);
// //     }
// //   };

// //   const handleOpenOtpModal = (
// //     context: "email" | "mobile" | "aadhar",
// //     target: string,
// //   ) => {
// //     if (!target) {
// //       alert(`Please enter your ${context} first.`);
// //       return;
// //     }
// //     setOtpContext(context);
// //     setOtpTarget(target);
// //     setOtpModalOpen(true);
// //   };

// //   const handleVerifyOtp = (otp: string) => {
// //     if (otpContext === "email") {
// //       setEmailVerified(true);
// //     } else if (otpContext === "mobile") {
// //       setPhoneVerified(true);
// //     } else if (otpContext === "aadhar") {
// //       setAadharVerified(true);
// //     }
// //     setOtpModalOpen(false);
// //     setOtpContext(null);
// //     setOtpTarget("");
// //   };

// //   const handleStartCamera = async () => {
// //     try {
// //       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// //       cameraStreamRef.current = stream;
// //       if (videoRef.current) {
// //         videoRef.current.srcObject = stream;
// //         videoRef.current.style.display = "block";
// //         setCameraActive(true);
// //       }
// //     } catch (err) {
// //       console.error("Error accessing camera:", err);
// //       alert(
// //         "Could not access the camera. Please ensure you have granted permission.",
// //       );
// //     }
// //   };

// //   const handleCaptureSelfie = () => {
// //     if (videoRef.current && canvasRef.current) {
// //       const video = videoRef.current;
// //       const canvas = canvasRef.current;
// //       const context = canvas.getContext("2d");
// //       canvas.width = video.videoWidth;
// //       canvas.height = video.videoHeight;
// //       context?.drawImage(video, 0, 0, canvas.width, canvas.height);
// //       video.style.display = "none";
// //       canvas.style.display = "block";
// //       setCameraActive(false);
// //       setSelfieCaptured(true);
// //       if (cameraStreamRef.current) {
// //         cameraStreamRef.current.getTracks().forEach((track) => track.stop());
// //       }
// //     }
// //   };

// //   const handleRetakeSelfie = async () => {
// //     try {
// //       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// //       cameraStreamRef.current = stream;
// //       if (videoRef.current && canvasRef.current) {
// //         videoRef.current.srcObject = stream;
// //         videoRef.current.style.display = "block";
// //         canvasRef.current.style.display = "none";
// //         setCameraActive(true);
// //         setSelfieCaptured(false);
// //       }
// //     } catch (err) {
// //       console.error("Error accessing camera:", err);
// //     }
// //   };

// //   const handleSubmit = (e: FormEvent) => {
// //     e.preventDefault();
// //     if (!tcChecked) {
// //       alert("Please agree to the Terms & Conditions.");
// //       return;
// //     }
// //     setShowReview(true);
// //     document
// //       .querySelector(".form-area")
// //       ?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   const handleEditReview = () => {
// //     setShowReview(false);
// //     document
// //       .querySelector(".form-area")
// //       ?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   const handleConfirmSubmit = () => {
// //     window.location.href = "signup-confirmation.html";
// //   };

// //   // ----- Render Helpers -----
// //   const renderReviewContent = () => {
// //     const sections = [
// //       {
// //         title: "Personal Details",
// //         data: [
// //           { label: "First Name", value: firstName },
// //           { label: "Last Name", value: lastName },
// //           {
// //             label: "Email Address",
// //             value: emailVerified ? email : "Not verified",
// //           },
// //           { label: "Date of Birth", value: dob },
// //           { label: "Gender", value: gender },
// //           { label: "Nationality", value: nationality },
// //           {
// //             label: "Mobile Number",
// //             value: phoneVerified ? phone : "Not verified",
// //           },
// //           { label: "Alternate Mobile Number", value: altPhone || "-" },
// //         ],
// //       },
// //       {
// //         title: "Verification & Banking Details",
// //         data: [
// //           {
// //             label: "Aadhar Number",
// //             value: aadharVerified ? aadhar : "Not verified",
// //           },
// //           { label: "PAN Number", value: pan || "-" },
// //           {
// //             label: "Bank Name",
// //             value: bankName === "Others" ? otherBankName : bankName,
// //           },
// //           { label: "IFSC Code", value: ifscCode || "-" },
// //           { label: "Branch Name", value: branchName || "-" },
// //           { label: "Account Number", value: accountNumber || "-" },
// //         ],
// //       },
// //       {
// //         title: "Educational & Professional Details",
// //         data: [
// //           { label: "Highest Qualification", value: highestQualification },
// //           { label: "Institute/University", value: instituteUniversity },
// //           {
// //             label: "Employment Status",
// //             value: employmentStatus === "working" ? "Working" : "Retired",
// //           },
// //           ...(employmentStatus === "working"
// //             ? [
// //                 { label: "Current Organisation Type", value: currOrgType },
// //                 {
// //                   label: "Current Organisation Sub-Type",
// //                   value: currOrgSubType,
// //                 },
// //                 { label: "Current Organisation Name", value: currOrgName },
// //                 { label: "Post/Designation", value: currPost },
// //                 {
// //                   label: "From Date",
// //                   value: `${currFromMonth}/${currFromYear}`,
// //                 },
// //               ]
// //             : [
// //                 { label: "Last Organisation Type", value: lastOrgType },
// //                 { label: "Last Organisation Sub-Type", value: lastOrgSubType },
// //                 { label: "Last Organisation Name", value: lastOrgName },
// //                 { label: "Post/Designation", value: lastPost },
// //                 { label: "Date of Retirement", value: dateOfRetirement },
// //               ]),
// //         ],
// //       },
// //       {
// //         title: "Address Details",
// //         data: [
// //           { label: "Residential State", value: resState },
// //           { label: "Residential City", value: resCity },
// //           { label: "Residential PIN", value: resPin },
// //           { label: "Residential Address Line 1", value: resAddr1 },
// //           { label: "Residential Address Line 2", value: resAddr2 || "-" },
// //           { label: "Preferred State", value: prefState },
// //           {
// //             label: "Preferred Cities",
// //             value: selectedCities.length > 0 ? selectedCities.join(", ") : "-",
// //           },
// //           { label: "Current Organisation State", value: currOrgState },
// //           { label: "Current Organisation City", value: currOrgCity },
// //           { label: "Current Organisation PIN", value: currOrgPin },
// //           { label: "Current Organisation Address", value: currOrgAddr1 },
// //           ...(employmentStatus === "retired"
// //             ? [
// //                 { label: "Last Organisation State", value: lastOrgState },
// //                 { label: "Last Organisation City", value: lastOrgCity },
// //                 { label: "Last Organisation PIN", value: lastOrgPin },
// //                 { label: "Last Organisation Address", value: lastOrgAddr1 },
// //               ]
// //             : []),
// //         ],
// //       },
// //       {
// //         title: "Upload Section",
// //         data: [
// //           { label: "Educational Document", value: eduProofName || "-" },
// //           ...(employmentStatus === "working"
// //             ? [
// //                 {
// //                   label: "Current Organisation Proof Type",
// //                   value: workingProofType || "-",
// //                 },
// //                 {
// //                   label: "Current Organisation Proof",
// //                   value: empProofName || "-",
// //                 },
// //               ]
// //             : [
// //                 {
// //                   label: "Last Organisation Proof Type",
// //                   value: lastOrgProofType || "-",
// //                 },
// //                 {
// //                   label: "Last Organisation Proof",
// //                   value: lastCertName || "-",
// //                 },
// //               ]),
// //           { label: "Aadhar Card Upload", value: aadharUploadName || "-" },
// //           { label: "PAN Card Upload", value: panUploadName || "-" },
// //           { label: "Cancelled Cheque/Passbook", value: bankProofName || "-" },
// //           ...othersDocs
// //             .filter((doc) => doc.fileName)
// //             .map((doc) => ({
// //               label: doc.name || "Other Document",
// //               value: doc.fileName,
// //             })),
// //         ],
// //       },
// //     ];

// //     return (
// //       <div className="flex flex-col gap-6">
// //         {sections.map((section, idx) => (
// //           <div key={idx}>
// //             <h4 className="m-0 mb-4 text-[#003366] text-base border-b-2 border-[#e2e8f0] pb-2 font-semibold">
// //               {section.title}
// //             </h4>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               {section.data.map((item, i) =>
// //                 item.value &&
// //                 item.value !== "-" &&
// //                 item.value !== "Not verified" ? (
// //                   <div key={i} className="flex flex-col gap-1">
// //                     <span className="text-[13px] text-[#64748b] font-medium">
// //                       {item.label}
// //                     </span>
// //                     <span className="text-sm text-[#0f172a] font-semibold break-words">
// //                       {item.value}
// //                     </span>
// //                   </div>
// //                 ) : null,
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };

// //   const getAvailableCities = () => {
// //     return STATE_CITY_MAP[prefState] || [];
// //   };

// //   const getCitiesForState = (state: string) => {
// //     return STATE_CITY_MAP[state] || [];
// //   };

// //   const renderOrgTypeSelect = (
// //     value: string,
// //     onChange: (val: string) => void,
// //     subTypeValue: string,
// //     onSubTypeChange: (val: string) => void,
// //     showSubType: boolean,
// //   ) => {
// //     const subTypes = ORG_SUB_TYPES_MAP[value] || [];
// //     return (
// //       <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //         <div className="form-col flex-1">
// //           <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //             Organization Type
// //           </label>
// //           <select
// //             className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white appearance-auto cursor-pointer focus:border-[#003366] focus:outline-none"
// //             value={value}
// //             onChange={(e) => onChange(e.target.value)}
// //           >
// //             <option value="">Select Type</option>
// //             <option value="Central Government">Central Government</option>
// //             <option value="State Government">State Government</option>
// //             <option value="Autonomous Body">Autonomous Body</option>
// //             <option value="Institute / College / School">
// //               Institute / College / School
// //             </option>
// //             <option value="University">University</option>
// //             <option value="Public Sector">Public Sector</option>
// //             <option value="Defence / Armed Forces">
// //               Defence / Armed Forces
// //             </option>
// //           </select>
// //         </div>
// //         {showSubType && (
// //           <div
// //             className="form-col flex-1"
// //             style={{ display: subTypes.length > 0 ? "flex" : "none" }}
// //           >
// //             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //               Sub-Type
// //             </label>
// //             <select
// //               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white appearance-auto cursor-pointer focus:border-[#003366] focus:outline-none"
// //               value={subTypeValue}
// //               onChange={(e) => onSubTypeChange(e.target.value)}
// //             >
// //               <option value="">Select Sub-Type</option>
// //               {subTypes.map((st) => (
// //                 <option key={st} value={st}>
// //                   {st}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   };

// //   // ----- Render -----
// //   return (
// //     <>
// //       <div className="fixed top-[14%] right-5 z-[99999] flex items-center gap-2 bg-[rgba(75,85,99,0.1)] text-[#4b5563] font-['Segoe_UI',sans-serif] text-xs font-bold py-1.5 px-3 border-[1.5px] border-[rgba(75,85,99,0.25)] rounded-full tracking-[0.5px] pointer-events-none select-none uppercase opacity-60">
// //         <svg
// //           width="14"
// //           height="14"
// //           viewBox="0 0 12 12"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             d="M3 6l2 2 4-4"
// //             stroke="currentColor"
// //             strokeWidth="2"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           />
// //         </svg>
// //         Completed
// //       </div>

// //       <nav className="flex items-center justify-between w-full max-w-full mx-0 h-16 bg-[#003366] px-8 sticky top-0 z-[2000]">
// //         <a
// //           href="welcome.html"
// //           id="navLogo"
// //           className=" text-[22px] font-bold text-white leading-[1.2] no-underline flex items-baseline gap-3"
// //         >
// //           <span>OMS Portal</span>

// //           <span className="text-[14px] font-normal text-white/70 leading-none">
// //             Excellence in Examination Services
// //           </span>
// //         </a>
// //       </nav>

// //       <div className="page-wrapper flex flex-col md:flex-row w-full min-h-[calc(100vh-64px)]">
// //         {/* LEFT PANEL */}
// //         <div className="left-panel w-full md:w-[65%] bg-white relative flex flex-col min-h-[calc(100vh-64px)]">
// //           <div className="form-area px-5 md:px-[100px] py-5 md:py-20 flex-1 flex flex-col justify-start w-full">
// //             <h1 className="form-title text-[34px] font-bold text-[#003366] font-source-sans mb-0.5">
// //               Sign-Up as Observer
// //             </h1>
// //             <p className="form-subtitle text-base text-[#888] font-roboto mb-5">
// //               Create your observer account to access field assignments and
// //               examinations.
// //             </p>

// //             <div
// //               id="stepIndicator"
// //               className="text-lg font-bold text-[#003366] mb-6"
// //             >
// //               Step {currentStep + 1} out of {STEPS.length}
// //             </div>

// //             {!showReview ? (
// //               <form
// //                 id="observerForm"
// //                 className="accordion-form flex flex-col mb-6"
// //                 onSubmit={handleSubmit}
// //                 noValidate
// //               >
// //                 {/* Panel 1: Personal Details */}
// //                 {currentStep === 0 && (
// //                   <div className="panel-item active block border-none bg-transparent">
// //                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
// //                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
// //                         Personal Details
// //                       </span>
// //                     </div>
// //                     <div className="panel-body overflow-visible">
// //                       <div className="panel-content p-0">
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               First Name
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
// //                               placeholder="As per bank record"
// //                               value={firstName}
// //                               onChange={(e) => setFirstName(e.target.value)}
// //                             />
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Last Name
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
// //                               placeholder="As per bank record"
// //                               value={lastName}
// //                               onChange={(e) => setLastName(e.target.value)}
// //                             />
// //                           </div>
// //                         </div>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Email Address
// //                             </label>
// //                             {!emailVerified ? (
// //                               <div className="input-group flex relative">
// //                                 <input
// //                                   type="email"
// //                                   className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] border-r-0 rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter your email"
// //                                   value={email}
// //                                   onChange={(e) => setEmail(e.target.value)}
// //                                 />
// //                                 <button
// //                                   type="button"
// //                                   className="inline-btn h-11 px-[18px] bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
// //                                   onClick={() =>
// //                                     handleOpenOtpModal("email", email)
// //                                   }
// //                                 >
// //                                   Send OTP
// //                                 </button>
// //                               </div>
// //                             ) : (
// //                               <div className="text-[#28a745] font-semibold flex items-center w-full h-11 border border-[#e2e8f0] rounded-md px-3 bg-[#f0fdf4]">
// //                                 ✓ {email} is verified.
// //                               </div>
// //                             )}
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Date of Birth
// //                             </label>
// //                             <input
// //                               type="date"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                               value={dob}
// //                               onChange={(e) => setDob(e.target.value)}
// //                             />
// //                           </div>
// //                         </div>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Gender
// //                             </label>
// //                             <select
// //                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                               value={gender}
// //                               onChange={(e) => setGender(e.target.value)}
// //                             >
// //                               <option value="">Select Gender</option>
// //                               <option value="male">Male</option>
// //                               <option value="female">Female</option>
// //                               <option value="other">Other</option>
// //                             </select>
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Nationality
// //                             </label>
// //                             <select
// //                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                               value={nationality}
// //                               onChange={(e) => setNationality(e.target.value)}
// //                             >
// //                               <option value="">Select Nationality</option>
// //                               <option value="indian">Indian</option>
// //                               <option value="other">Other</option>
// //                             </select>
// //                           </div>
// //                         </div>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Mobile Number
// //                             </label>
// //                             {!phoneVerified ? (
// //                               <div className="input-group flex relative">
// //                                 <div className="flex items-center bg-[#f8fafc] border-[1.5px] border-[#e0e0e0] border-r-0 px-3 text-[13px] text-[#333] font-medium">
// //                                   +91
// //                                 </div>
// //                                 <input
// //                                   type="tel"
// //                                   className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] border-l-0 px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter your mobile number"
// //                                   maxLength={10}
// //                                   value={phone}
// //                                   onChange={(e) =>
// //                                     setPhone(
// //                                       e.target.value
// //                                         .replace(/[^0-9]/g, "")
// //                                         .slice(0, 10),
// //                                     )
// //                                   }
// //                                 />
// //                                 <button
// //                                   type="button"
// //                                   className="inline-btn h-11 px-[18px] bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
// //                                   onClick={() =>
// //                                     handleOpenOtpModal("mobile", phone)
// //                                   }
// //                                 >
// //                                   Send OTP
// //                                 </button>
// //                               </div>
// //                             ) : (
// //                               <div className="text-[#28a745] font-semibold flex items-center w-full h-11 border border-[#e2e8f0] rounded-md px-3 bg-[#f0fdf4]">
// //                                 ✓ {phone} is now verified.
// //                               </div>
// //                             )}
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block flex justify-between items-center">
// //                               <span>Alternate Mobile Number</span>
// //                             </label>
// //                             <div className="input-group flex">
// //                               <div className="flex items-center bg-[#f8fafc] border-[1.5px] border-[#e0e0e0] border-r-0 px-3 text-[13px] text-[#333] font-medium">
// //                                 +91
// //                               </div>
// //                               <input
// //                                 type="tel"
// //                                 className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] border-l-0 border-r-[1.5px] px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                 placeholder="Enter alternate mobile number"
// //                                 maxLength={10}
// //                                 value={altPhone}
// //                                 onChange={(e) =>
// //                                   setAltPhone(
// //                                     e.target.value
// //                                       .replace(/[^0-9]/g, "")
// //                                       .slice(0, 10),
// //                                   )
// //                                 }
// //                               />
// //                             </div>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Panel 2: Verification & Banking Details */}
// //                 {currentStep === 1 && (
// //                   <div className="panel-item active block border-none bg-transparent">
// //                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
// //                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
// //                         Verification &amp; Banking Details
// //                       </span>
// //                     </div>
// //                     <div className="panel-body overflow-visible">
// //                       <div className="panel-content p-0">
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Aadhar Number
// //                             </label>
// //                             {!aadharVerified ? (
// //                               <div className="input-group flex relative">
// //                                 <input
// //                                   type="text"
// //                                   className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="XXXX-XXXX-XXXX"
// //                                   value={aadhar}
// //                                   onChange={(e) => setAadhar(e.target.value)}
// //                                 />
// //                                 <button
// //                                   type="button"
// //                                   className="inline-btn h-11 px-[18px] bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
// //                                   onClick={() =>
// //                                     handleOpenOtpModal("aadhar", aadhar)
// //                                   }
// //                                 >
// //                                   Get OTP
// //                                 </button>
// //                               </div>
// //                             ) : (
// //                               <div className="text-[#28a745] font-semibold flex items-center w-full h-11 border border-[#e2e8f0] rounded-md px-3 bg-[#f0fdf4]">
// //                                 ✓ {aadhar} is verified.
// //                               </div>
// //                             )}
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               PAN Number
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
// //                               placeholder="Enter PAN Number"
// //                               value={pan}
// //                               onChange={(e) => setPan(e.target.value)}
// //                             />
// //                           </div>
// //                         </div>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Bank Name
// //                             </label>
// //                             <select
// //                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                               value={bankName}
// //                               onChange={(e) => setBankName(e.target.value)}
// //                             >
// //                               <option value="">Select Bank</option>
// //                               <option value="SBI">
// //                                 State Bank of India (SBI)
// //                               </option>
// //                               <option value="HDFC">HDFC Bank</option>
// //                               <option value="ICICI">ICICI Bank</option>
// //                               <option value="Kotak">Kotak Mahindra Bank</option>
// //                               <option value="Axis">Axis Bank</option>
// //                               <option value="PNB">Punjab National Bank</option>
// //                               <option value="Others">Others</option>
// //                             </select>
// //                             {bankName === "Others" && (
// //                               <input
// //                                 type="text"
// //                                 className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white mt-2.5"
// //                                 placeholder="Enter other bank name"
// //                                 value={otherBankName}
// //                                 onChange={(e) =>
// //                                   setOtherBankName(e.target.value)
// //                                 }
// //                               />
// //                             )}
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               IFSC Code
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
// //                               placeholder="Enter IFSC code"
// //                               value={ifscCode}
// //                               onChange={(e) => setIfscCode(e.target.value)}
// //                             />
// //                           </div>
// //                         </div>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Branch Name
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-[#f8fafc] text-[#aaa] cursor-not-allowed"
// //                               placeholder="Auto-filled from IFSC Code"
// //                               value={branchName}
// //                               readOnly
// //                             />
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Account Number
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                               placeholder="Enter account number"
// //                               value={accountNumber}
// //                               onChange={(e) => setAccountNumber(e.target.value)}
// //                             />
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Panel 3: Educational & Professional Details */}
// //                 {currentStep === 2 && (
// //                   <div className="panel-item active block border-none bg-transparent">
// //                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
// //                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
// //                         Educational &amp; Professional Details
// //                       </span>
// //                     </div>
// //                     <div className="panel-body overflow-visible">
// //                       <div className="panel-content p-0">
// //                         <h3 className="form-subtitle mt-0 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
// //                           Educational Qualification
// //                         </h3>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Highest Qualification
// //                             </label>
// //                             <select
// //                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                               value={highestQualification}
// //                               onChange={(e) =>
// //                                 setHighestQualification(e.target.value)
// //                               }
// //                             >
// //                               <option value="">Select Qualification</option>
// //                               <option value="Graduation">Graduation</option>
// //                               <option value="Post-Graduation">
// //                                 Post-Graduation
// //                               </option>
// //                               <option value="Doctorate">Doctorate</option>
// //                             </select>
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Institute/ University Name
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                               placeholder="Enter Institute/ University Name"
// //                               value={instituteUniversity}
// //                               onChange={(e) =>
// //                                 setInstituteUniversity(e.target.value)
// //                               }
// //                             />
// //                           </div>
// //                         </div>

// //                         <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
// //                           Professional / Employment Details
// //                         </h3>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col full flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Employment Status
// //                             </label>
// //                             <div className="radio-group flex gap-6 mt-2">
// //                               <label className="radio-label flex items-center cursor-pointer font-roboto text-sm">
// //                                 <input
// //                                   type="radio"
// //                                   name="employmentStatus"
// //                                   value="working"
// //                                   checked={employmentStatus === "working"}
// //                                   onChange={() =>
// //                                     setEmploymentStatus("working")
// //                                   }
// //                                   className="mr-2 w-4 h-4 accent-[#003366]"
// //                                 />
// //                                 <span className="radio-text text-[#1a2b4a]">
// //                                   Working
// //                                 </span>
// //                               </label>
// //                               <label className="radio-label flex items-center cursor-pointer font-roboto text-sm">
// //                                 <input
// //                                   type="radio"
// //                                   name="employmentStatus"
// //                                   value="retired"
// //                                   checked={employmentStatus === "retired"}
// //                                   onChange={() =>
// //                                     setEmploymentStatus("retired")
// //                                   }
// //                                   className="mr-2 w-4 h-4 accent-[#003366]"
// //                                 />
// //                                 <span className="radio-text text-[#1a2b4a]">
// //                                   Retired
// //                                 </span>
// //                               </label>
// //                             </div>
// //                           </div>
// //                         </div>

// //                         {/* Working Fields */}
// //                         {employmentStatus === "working" && (
// //                           <div
// //                             id="workingFields"
// //                             className="employment-section mt-4"
// //                           >
// //                             {renderOrgTypeSelect(
// //                               currOrgType,
// //                               setCurrOrgType,
// //                               currOrgSubType,
// //                               setCurrOrgSubType,
// //                               true,
// //                             )}
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   Current Organisation Name
// //                                 </label>
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter organisation name"
// //                                   value={currOrgName}
// //                                   onChange={(e) =>
// //                                     setCurrOrgName(e.target.value)
// //                                   }
// //                                 />
// //                               </div>
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   Post / Designation
// //                                 </label>
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter designation"
// //                                   value={currPost}
// //                                   onChange={(e) => setCurrPost(e.target.value)}
// //                                 />
// //                               </div>
// //                             </div>
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   From
// //                                 </label>
// //                                 <div className="date-input-group flex gap-3 w-full">
// //                                   <select
// //                                     className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                     value={currFromMonth}
// //                                     onChange={(e) =>
// //                                       setCurrFromMonth(e.target.value)
// //                                     }
// //                                   >
// //                                     <option value="">Month</option>
// //                                     <option value="01">Jan</option>
// //                                     <option value="02">Feb</option>
// //                                     <option value="03">Mar</option>
// //                                     <option value="04">Apr</option>
// //                                     <option value="05">May</option>
// //                                     <option value="06">Jun</option>
// //                                     <option value="07">Jul</option>
// //                                     <option value="08">Aug</option>
// //                                     <option value="09">Sep</option>
// //                                     <option value="10">Oct</option>
// //                                     <option value="11">Nov</option>
// //                                     <option value="12">Dec</option>
// //                                   </select>
// //                                   <input
// //                                     type="number"
// //                                     className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                     placeholder="Year"
// //                                     min="1950"
// //                                     max="2026"
// //                                     value={currFromYear}
// //                                     onChange={(e) =>
// //                                       setCurrFromYear(e.target.value)
// //                                     }
// //                                   />
// //                                 </div>
// //                               </div>
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   To
// //                                 </label>
// //                                 <div className="date-input-group flex gap-3 w-full">
// //                                   <select
// //                                     className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                     disabled
// //                                   >
// //                                     <option value="">Month</option>
// //                                     <option value="Present">Present</option>
// //                                   </select>
// //                                   <input
// //                                     type="text"
// //                                     className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#94a3b8] bg-[#f8fafc] cursor-not-allowed"
// //                                     value="Present"
// //                                     disabled
// //                                   />
// //                                 </div>
// //                               </div>
// //                             </div>
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col flex-1">
// //                                 <div className="add-last-org-container flex items-center justify-between mt-2">
// //                                   <span className="add-last-org-text text-base font-normal text-[#003366] font-source-sans">
// //                                     Add last organisation (Optional)
// //                                   </span>
// //                                   <button
// //                                     type="button"
// //                                     className="add-plus-btn w-8 h-8 p-0 bg-[#f8fafc] text-[#003366] border-[1.5px] border-[#003366] rounded-full text-lg font-semibold font-source-sans cursor-pointer transition-all hover:bg-[#003366] hover:text-white hover:scale-105 flex items-center justify-center"
// //                                     onClick={handleAddLastOrg}
// //                                   >
// //                                     +
// //                                   </button>
// //                                 </div>
// //                               </div>
// //                             </div>
// //                             <div id="additionalOrgsContainer">
// //                               {additionalOrgs.map((org, idx) => {
// //                                 const data = additionalOrgsData.find(
// //                                   (d) => d.id === org.id,
// //                                 );
// //                                 if (!data) return null;
// //                                 const subTypes =
// //                                   ORG_SUB_TYPES_MAP[data.orgType] || [];
// //                                 return (
// //                                   <div
// //                                     key={org.id}
// //                                     className="optional-section border-t border-dotted border-[#cbd5e1] pt-5 mt-5 relative"
// //                                   >
// //                                     <button
// //                                       type="button"
// //                                       className="remove-org-btn absolute top-1 right-0 text-[#ef4444] text-[13px] font-semibold underline bg-none border-none cursor-pointer hover:text-[#dc2626]"
// //                                       onClick={() =>
// //                                         handleRemoveLastOrg(org.id)
// //                                       }
// //                                     >
// //                                       Remove
// //                                     </button>
// //                                     <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                                       <div className="form-col flex-1">
// //                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                           Organization Type
// //                                         </label>
// //                                         <select
// //                                           className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                           value={data.orgType}
// //                                           onChange={(e) =>
// //                                             updateAdditionalOrgData(
// //                                               org.id,
// //                                               "orgType",
// //                                               e.target.value,
// //                                             )
// //                                           }
// //                                         >
// //                                           <option value="">Select Type</option>
// //                                           <option value="Central Government">
// //                                             Central Government
// //                                           </option>
// //                                           <option value="State Government">
// //                                             State Government
// //                                           </option>
// //                                           <option value="Autonomous Body">
// //                                             Autonomous Body
// //                                           </option>
// //                                           <option value="Institute / College / School">
// //                                             Institute / College / School
// //                                           </option>
// //                                           <option value="University">
// //                                             University
// //                                           </option>
// //                                           <option value="Public Sector">
// //                                             Public Sector
// //                                           </option>
// //                                           <option value="Defence / Armed Forces">
// //                                             Defence / Armed Forces
// //                                           </option>
// //                                         </select>
// //                                       </div>
// //                                       <div
// //                                         className="form-col flex-1"
// //                                         style={{
// //                                           display:
// //                                             subTypes.length > 0
// //                                               ? "flex"
// //                                               : "none",
// //                                         }}
// //                                       >
// //                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                           Sub-Type
// //                                         </label>
// //                                         <select
// //                                           className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                           value={data.orgSubType}
// //                                           onChange={(e) =>
// //                                             updateAdditionalOrgData(
// //                                               org.id,
// //                                               "orgSubType",
// //                                               e.target.value,
// //                                             )
// //                                           }
// //                                         >
// //                                           <option value="">
// //                                             Select Sub-Type
// //                                           </option>
// //                                           {subTypes.map((st) => (
// //                                             <option key={st} value={st}>
// //                                               {st}
// //                                             </option>
// //                                           ))}
// //                                         </select>
// //                                       </div>
// //                                     </div>
// //                                     <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                                       <div className="form-col flex-1">
// //                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                           Last Organisation Name
// //                                         </label>
// //                                         <input
// //                                           type="text"
// //                                           className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                           placeholder="Enter last organisation name"
// //                                           value={data.orgName}
// //                                           onChange={(e) =>
// //                                             updateAdditionalOrgData(
// //                                               org.id,
// //                                               "orgName",
// //                                               e.target.value,
// //                                             )
// //                                           }
// //                                         />
// //                                       </div>
// //                                       <div className="form-col flex-1">
// //                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                           Post / Designation
// //                                         </label>
// //                                         <input
// //                                           type="text"
// //                                           className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                           placeholder="Enter designation"
// //                                           value={data.post}
// //                                           onChange={(e) =>
// //                                             updateAdditionalOrgData(
// //                                               org.id,
// //                                               "post",
// //                                               e.target.value,
// //                                             )
// //                                           }
// //                                         />
// //                                       </div>
// //                                     </div>
// //                                     <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                                       <div className="form-col flex-1">
// //                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                           From
// //                                         </label>
// //                                         <div className="date-input-group flex gap-3 w-full">
// //                                           <select
// //                                             className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                             value={data.fromMonth}
// //                                             onChange={(e) =>
// //                                               updateAdditionalOrgData(
// //                                                 org.id,
// //                                                 "fromMonth",
// //                                                 e.target.value,
// //                                               )
// //                                             }
// //                                           >
// //                                             <option value="">Month</option>
// //                                             <option value="01">Jan</option>
// //                                             <option value="02">Feb</option>
// //                                             <option value="03">Mar</option>
// //                                             <option value="04">Apr</option>
// //                                             <option value="05">May</option>
// //                                             <option value="06">Jun</option>
// //                                             <option value="07">Jul</option>
// //                                             <option value="08">Aug</option>
// //                                             <option value="09">Sep</option>
// //                                             <option value="10">Oct</option>
// //                                             <option value="11">Nov</option>
// //                                             <option value="12">Dec</option>
// //                                           </select>
// //                                           <input
// //                                             type="number"
// //                                             className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                             placeholder="Year"
// //                                             min="1950"
// //                                             max="2026"
// //                                             value={data.fromYear}
// //                                             onChange={(e) =>
// //                                               updateAdditionalOrgData(
// //                                                 org.id,
// //                                                 "fromYear",
// //                                                 e.target.value,
// //                                               )
// //                                             }
// //                                           />
// //                                         </div>
// //                                       </div>
// //                                       <div className="form-col flex-1">
// //                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                           To
// //                                         </label>
// //                                         <div className="date-input-group flex gap-3 w-full">
// //                                           <select
// //                                             className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                             value={data.toMonth}
// //                                             onChange={(e) =>
// //                                               updateAdditionalOrgData(
// //                                                 org.id,
// //                                                 "toMonth",
// //                                                 e.target.value,
// //                                               )
// //                                             }
// //                                           >
// //                                             <option value="">Month</option>
// //                                             <option value="01">Jan</option>
// //                                             <option value="02">Feb</option>
// //                                             <option value="03">Mar</option>
// //                                             <option value="04">Apr</option>
// //                                             <option value="05">May</option>
// //                                             <option value="06">Jun</option>
// //                                             <option value="07">Jul</option>
// //                                             <option value="08">Aug</option>
// //                                             <option value="09">Sep</option>
// //                                             <option value="10">Oct</option>
// //                                             <option value="11">Nov</option>
// //                                             <option value="12">Dec</option>
// //                                           </select>
// //                                           <input
// //                                             type="number"
// //                                             className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                             placeholder="Year"
// //                                             min="1950"
// //                                             max="2026"
// //                                             value={data.toYear}
// //                                             onChange={(e) =>
// //                                               updateAdditionalOrgData(
// //                                                 org.id,
// //                                                 "toYear",
// //                                                 e.target.value,
// //                                               )
// //                                             }
// //                                           />
// //                                         </div>
// //                                       </div>
// //                                     </div>
// //                                   </div>
// //                                 );
// //                               })}
// //                             </div>
// //                           </div>
// //                         )}

// //                         {/* Retired Fields */}
// //                         {employmentStatus === "retired" && (
// //                           <div
// //                             id="retiredFields"
// //                             className="employment-section mt-4"
// //                           >
// //                             {renderOrgTypeSelect(
// //                               lastOrgType,
// //                               setLastOrgType,
// //                               lastOrgSubType,
// //                               setLastOrgSubType,
// //                               true,
// //                             )}
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   Last Organisation Name
// //                                 </label>
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter last organisation name"
// //                                   value={lastOrgName}
// //                                   onChange={(e) =>
// //                                     setLastOrgName(e.target.value)
// //                                   }
// //                                 />
// //                               </div>
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   Post / Designation
// //                                 </label>
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter designation"
// //                                   value={lastPost}
// //                                   onChange={(e) => setLastPost(e.target.value)}
// //                                 />
// //                               </div>
// //                             </div>
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   Date of Retirement
// //                                 </label>
// //                                 <input
// //                                   type="date"
// //                                   id="dateOfRetirement"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   value={dateOfRetirement}
// //                                   onChange={(e) =>
// //                                     setDateOfRetirement(e.target.value)
// //                                   }
// //                                 />
// //                               </div>
// //                             </div>
// //                           </div>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Panel 4: Address Details */}
// //                 {currentStep === 3 && (
// //                   <div className="panel-item active block border-none bg-transparent">
// //                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
// //                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
// //                         Address Details
// //                       </span>
// //                     </div>
// //                     <div className="panel-body overflow-visible">
// //                       <div className="panel-content p-0">
// //                         <h3 className="form-subtitle mt-0 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
// //                           Residential Address
// //                         </h3>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               State
// //                             </label>
// //                             <select
// //                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                               value={resState}
// //                               onChange={(e) => setResState(e.target.value)}
// //                             >
// //                               <option value="">Select State</option>
// //                               <option value="Andhra Pradesh">
// //                                 Andhra Pradesh
// //                               </option>
// //                               <option value="Bihar">Bihar</option>
// //                               <option value="Delhi">Delhi</option>
// //                               <option value="Gujarat">Gujarat</option>
// //                               <option value="Karnataka">Karnataka</option>
// //                               <option value="Maharashtra">Maharashtra</option>
// //                               <option value="Tamil Nadu">Tamil Nadu</option>
// //                               <option value="Uttar Pradesh">
// //                                 Uttar Pradesh
// //                               </option>
// //                               <option value="West Bengal">West Bengal</option>
// //                             </select>
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               City/ District
// //                             </label>
// //                             <select
// //                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                               value={resCity}
// //                               onChange={(e) => setResCity(e.target.value)}
// //                             >
// //                               <option value="">Select City/ District</option>
// //                               {getCitiesForState(resState).map((city) => (
// //                                 <option key={city} value={city}>
// //                                   {city}
// //                                 </option>
// //                               ))}
// //                             </select>
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               PIN Code
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                               placeholder="Enter PIN Code"
// //                               maxLength={6}
// //                               value={resPin}
// //                               onChange={(e) =>
// //                                 setResPin(e.target.value.replace(/[^0-9]/g, ""))
// //                               }
// //                             />
// //                           </div>
// //                         </div>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col full flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Address Line 1
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                               placeholder="Enter Address Line 1"
// //                               value={resAddr1}
// //                               onChange={(e) => setResAddr1(e.target.value)}
// //                             />
// //                           </div>
// //                         </div>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col full flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Address Line 2
// //                             </label>
// //                             <input
// //                               type="text"
// //                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                               placeholder="Enter Address Line 2"
// //                               value={resAddr2}
// //                               onChange={(e) => setResAddr2(e.target.value)}
// //                             />
// //                           </div>
// //                         </div>

// //                         <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
// //                           Select preferred work location
// //                         </h3>
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Preferred State
// //                             </label>
// //                             <select
// //                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                               value={prefState}
// //                               onChange={(e) => setPrefState(e.target.value)}
// //                             >
// //                               <option value="">Select State</option>
// //                               <option value="Andhra Pradesh">
// //                                 Andhra Pradesh
// //                               </option>
// //                               <option value="Bihar">Bihar</option>
// //                               <option value="Delhi">Delhi</option>
// //                               <option value="Gujarat">Gujarat</option>
// //                               <option value="Karnataka">Karnataka</option>
// //                               <option value="Maharashtra">Maharashtra</option>
// //                               <option value="Tamil Nadu">Tamil Nadu</option>
// //                               <option value="Uttar Pradesh">
// //                                 Uttar Pradesh
// //                               </option>
// //                               <option value="West Bengal">West Bengal</option>
// //                             </select>
// //                           </div>
// //                         </div>
// //                         {prefState && (
// //                           <div id="citySelectionSection" className="mt-4">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Select up to 3 Cities
// //                             </label>
// //                             <CustomMultiSelect
// //                               cities={getAvailableCities()}
// //                               selectedCities={selectedCities}
// //                               onToggleCity={handleToggleCity}
// //                               maxSelect={3}
// //                             />
// //                             <p
// //                               id="citySelectionMeta"
// //                               className="text-[13px] text-[#6b7280] mt-2"
// //                             >
// //                               Selected: {selectedCities.length}/3
// //                             </p>
// //                           </div>
// //                         )}

// //                         {/* Current Organisation Address */}
// //                         {employmentStatus === "working" && (
// //                           <div id="currOrgAddressSection">
// //                             <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
// //                               Current Organisation Address
// //                             </h3>
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   State
// //                                 </label>
// //                                 <select
// //                                   className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                   value={currOrgState}
// //                                   onChange={(e) =>
// //                                     setCurrOrgState(e.target.value)
// //                                   }
// //                                 >
// //                                   <option value="">Select State</option>
// //                                   <option value="Andhra Pradesh">
// //                                     Andhra Pradesh
// //                                   </option>
// //                                   <option value="Bihar">Bihar</option>
// //                                   <option value="Delhi">Delhi</option>
// //                                   <option value="Gujarat">Gujarat</option>
// //                                   <option value="Karnataka">Karnataka</option>
// //                                   <option value="Maharashtra">
// //                                     Maharashtra
// //                                   </option>
// //                                   <option value="Tamil Nadu">Tamil Nadu</option>
// //                                   <option value="Uttar Pradesh">
// //                                     Uttar Pradesh
// //                                   </option>
// //                                   <option value="West Bengal">
// //                                     West Bengal
// //                                   </option>
// //                                 </select>
// //                               </div>
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   City/ District
// //                                 </label>
// //                                 <select
// //                                   className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                   value={currOrgCity}
// //                                   onChange={(e) =>
// //                                     setCurrOrgCity(e.target.value)
// //                                   }
// //                                 >
// //                                   <option value="">
// //                                     Select City/ District
// //                                   </option>
// //                                   {getCitiesForState(currOrgState).map(
// //                                     (city) => (
// //                                       <option key={city} value={city}>
// //                                         {city}
// //                                       </option>
// //                                     ),
// //                                   )}
// //                                 </select>
// //                               </div>
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   PIN Code
// //                                 </label>
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter PIN Code"
// //                                   maxLength={6}
// //                                   value={currOrgPin}
// //                                   onChange={(e) =>
// //                                     setCurrOrgPin(
// //                                       e.target.value.replace(/[^0-9]/g, ""),
// //                                     )
// //                                   }
// //                                 />
// //                               </div>
// //                             </div>
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col full flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   Address Line 1
// //                                 </label>
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter Address Line 1"
// //                                   value={currOrgAddr1}
// //                                   onChange={(e) =>
// //                                     setCurrOrgAddr1(e.target.value)
// //                                   }
// //                                 />
// //                               </div>
// //                             </div>
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col full flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   Address Line 2
// //                                 </label>
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter Address Line 2"
// //                                   value={currOrgAddr2}
// //                                   onChange={(e) =>
// //                                     setCurrOrgAddr2(e.target.value)
// //                                   }
// //                                 />
// //                               </div>
// //                             </div>
// //                           </div>
// //                         )}

// //                         {/* Last Organisation Address */}
// //                         {employmentStatus === "retired" && (
// //                           <div id="lastOrgAddressSection">
// //                             <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
// //                               Last Organisation Address
// //                             </h3>
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   State
// //                                 </label>
// //                                 <select
// //                                   className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                   value={lastOrgState}
// //                                   onChange={(e) =>
// //                                     setLastOrgState(e.target.value)
// //                                   }
// //                                 >
// //                                   <option value="">Select State</option>
// //                                   <option value="Andhra Pradesh">
// //                                     Andhra Pradesh
// //                                   </option>
// //                                   <option value="Bihar">Bihar</option>
// //                                   <option value="Delhi">Delhi</option>
// //                                   <option value="Gujarat">Gujarat</option>
// //                                   <option value="Karnataka">Karnataka</option>
// //                                   <option value="Maharashtra">
// //                                     Maharashtra
// //                                   </option>
// //                                   <option value="Tamil Nadu">Tamil Nadu</option>
// //                                   <option value="Uttar Pradesh">
// //                                     Uttar Pradesh
// //                                   </option>
// //                                   <option value="West Bengal">
// //                                     West Bengal
// //                                   </option>
// //                                 </select>
// //                               </div>
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   City/ District
// //                                 </label>
// //                                 <select
// //                                   className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                   value={lastOrgCity}
// //                                   onChange={(e) =>
// //                                     setLastOrgCity(e.target.value)
// //                                   }
// //                                 >
// //                                   <option value="">
// //                                     Select City/ District
// //                                   </option>
// //                                   {getCitiesForState(lastOrgState).map(
// //                                     (city) => (
// //                                       <option key={city} value={city}>
// //                                         {city}
// //                                       </option>
// //                                     ),
// //                                   )}
// //                                 </select>
// //                               </div>
// //                               <div className="form-col flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   PIN Code
// //                                 </label>
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter PIN Code"
// //                                   maxLength={6}
// //                                   value={lastOrgPin}
// //                                   onChange={(e) =>
// //                                     setLastOrgPin(
// //                                       e.target.value.replace(/[^0-9]/g, ""),
// //                                     )
// //                                   }
// //                                 />
// //                               </div>
// //                             </div>
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col full flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   Address Line 1
// //                                 </label>
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter Address Line 1"
// //                                   value={lastOrgAddr1}
// //                                   onChange={(e) =>
// //                                     setLastOrgAddr1(e.target.value)
// //                                   }
// //                                 />
// //                               </div>
// //                             </div>
// //                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                               <div className="form-col full flex-1">
// //                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                   Address Line 2
// //                                 </label>
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                   placeholder="Enter Address Line 2"
// //                                   value={lastOrgAddr2}
// //                                   onChange={(e) =>
// //                                     setLastOrgAddr2(e.target.value)
// //                                   }
// //                                 />
// //                               </div>
// //                             </div>
// //                           </div>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Panel 5: Upload Section */}
// //                 {currentStep === 4 && (
// //                   <div className="panel-item active block border-none bg-transparent">
// //                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
// //                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
// //                         Upload Section
// //                       </span>
// //                     </div>
// //                     <div className="panel-body overflow-visible">
// //                       <div className="panel-content p-0">
// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col full flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Educational Document{" "}
// //                               <span className="text-xs text-[#6b7280] font-normal ml-1">
// //                                 (Max 1 MB)
// //                               </span>
// //                             </label>
// //                             <div className="file-input-wrap relative w-full h-11">
// //                               <input
// //                                 type="text"
// //                                 className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
// //                                 placeholder="Upload Highest Qualification Document"
// //                                 value={eduProofName}
// //                                 readOnly
// //                               />
// //                               <svg
// //                                 className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
// //                                 viewBox="0 0 24 24"
// //                                 fill="none"
// //                                 stroke="currentColor"
// //                                 strokeWidth="1.5"
// //                               >
// //                                 <path d="M12 5v14M5 12l7-7 7 7" />
// //                               </svg>
// //                               <input
// //                                 type="file"
// //                                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
// //                                 accept=".pdf,.jpg,.png"
// //                                 onChange={(e) =>
// //                                   handleFileChange(
// //                                     e,
// //                                     setEduProofFile,
// //                                     setEduProofName,
// //                                   )
// //                                 }
// //                               />
// //                             </div>
// //                           </div>
// //                         </div>

// //                         {employmentStatus === "working" ? (
// //                           <div
// //                             className="form-row flex gap-6 mb-3 flex-col md:flex-row"
// //                             id="uploadRowWorking"
// //                           >
// //                             <div className="form-col flex-1">
// //                               <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                 Proof of Employment Type
// //                               </label>
// //                               <select
// //                                 className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                 value={workingProofType}
// //                                 onChange={(e) =>
// //                                   setWorkingProofType(e.target.value)
// //                                 }
// //                               >
// //                                 <option value="">Select Document Type</option>
// //                                 <option value="ID card">ID card</option>
// //                               </select>
// //                             </div>
// //                             <div className="form-col flex-1">
// //                               <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                 Current Organisation Proof{" "}
// //                                 <span className="text-xs text-[#6b7280] font-normal ml-1">
// //                                   (Max 1 MB)
// //                                 </span>
// //                               </label>
// //                               <div className="file-input-wrap relative w-full h-11">
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
// //                                   placeholder="Upload Document"
// //                                   value={empProofName}
// //                                   readOnly
// //                                 />
// //                                 <svg
// //                                   className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
// //                                   viewBox="0 0 24 24"
// //                                   fill="none"
// //                                   stroke="currentColor"
// //                                   strokeWidth="1.5"
// //                                 >
// //                                   <path d="M12 5v14M5 12l7-7 7 7" />
// //                                 </svg>
// //                                 <input
// //                                   type="file"
// //                                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
// //                                   accept=".pdf,.jpg,.png"
// //                                   onChange={(e) =>
// //                                     handleFileChange(
// //                                       e,
// //                                       setEmpProofFile,
// //                                       setEmpProofName,
// //                                     )
// //                                   }
// //                                 />
// //                               </div>
// //                             </div>
// //                           </div>
// //                         ) : (
// //                           <div
// //                             className="form-row flex gap-6 mb-3 flex-col md:flex-row"
// //                             id="uploadRowLastOrg"
// //                           >
// //                             <div className="form-col flex-1">
// //                               <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                 Proof of Employment Type
// //                               </label>
// //                               <select
// //                                 className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
// //                                 value={lastOrgProofType}
// //                                 onChange={(e) =>
// //                                   setLastOrgProofType(e.target.value)
// //                                 }
// //                               >
// //                                 <option value="">Select Document Type</option>
// //                                 <option value="Service Certificate">
// //                                   Service Certificate
// //                                 </option>
// //                                 <option value="PPO">PPO</option>
// //                                 <option value="ID card">ID card</option>
// //                               </select>
// //                             </div>
// //                             <div className="form-col flex-1">
// //                               <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                                 Last Organisation Proof{" "}
// //                                 <span className="text-xs text-[#6b7280] font-normal ml-1">
// //                                   (Max 1 MB)
// //                                 </span>
// //                               </label>
// //                               <div className="file-input-wrap relative w-full h-11">
// //                                 <input
// //                                   type="text"
// //                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
// //                                   placeholder="Upload Document"
// //                                   value={lastCertName}
// //                                   readOnly
// //                                 />
// //                                 <svg
// //                                   className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
// //                                   viewBox="0 0 24 24"
// //                                   fill="none"
// //                                   stroke="currentColor"
// //                                   strokeWidth="1.5"
// //                                 >
// //                                   <path d="M12 5v14M5 12l7-7 7 7" />
// //                                 </svg>
// //                                 <input
// //                                   type="file"
// //                                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
// //                                   accept=".pdf,.jpg,.png"
// //                                   onChange={(e) =>
// //                                     handleFileChange(
// //                                       e,
// //                                       setLastCertFile,
// //                                       setLastCertName,
// //                                     )
// //                                   }
// //                                 />
// //                               </div>
// //                             </div>
// //                           </div>
// //                         )}

// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Aadhar Card{" "}
// //                               <span className="text-xs text-[#6b7280] font-normal ml-1">
// //                                 (Max 1 MB)
// //                               </span>
// //                             </label>
// //                             <div className="file-input-wrap relative w-full h-11">
// //                               <input
// //                                 type="text"
// //                                 className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
// //                                 placeholder="Upload Document"
// //                                 value={aadharUploadName}
// //                                 readOnly
// //                               />
// //                               <svg
// //                                 className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
// //                                 viewBox="0 0 24 24"
// //                                 fill="none"
// //                                 stroke="currentColor"
// //                                 strokeWidth="1.5"
// //                               >
// //                                 <path d="M12 5v14M5 12l7-7 7 7" />
// //                               </svg>
// //                               <input
// //                                 type="file"
// //                                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
// //                                 accept=".pdf,.jpg,.png"
// //                                 onChange={(e) =>
// //                                   handleFileChange(
// //                                     e,
// //                                     setAadharUploadFile,
// //                                     setAadharUploadName,
// //                                   )
// //                                 }
// //                               />
// //                             </div>
// //                           </div>
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               PAN Card{" "}
// //                               <span className="text-xs text-[#6b7280] font-normal ml-1">
// //                                 (Max 1 MB)
// //                               </span>
// //                             </label>
// //                             <div className="file-input-wrap relative w-full h-11">
// //                               <input
// //                                 type="text"
// //                                 className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
// //                                 placeholder="Upload Document"
// //                                 value={panUploadName}
// //                                 readOnly
// //                               />
// //                               <svg
// //                                 className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
// //                                 viewBox="0 0 24 24"
// //                                 fill="none"
// //                                 stroke="currentColor"
// //                                 strokeWidth="1.5"
// //                               >
// //                                 <path d="M12 5v14M5 12l7-7 7 7" />
// //                               </svg>
// //                               <input
// //                                 type="file"
// //                                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
// //                                 accept=".pdf,.jpg,.png"
// //                                 onChange={(e) =>
// //                                   handleFileChange(
// //                                     e,
// //                                     setPanUploadFile,
// //                                     setPanUploadName,
// //                                   )
// //                                 }
// //                               />
// //                             </div>
// //                           </div>
// //                         </div>

// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Cancelled Cheque / Passbook Copy{" "}
// //                               <span className="text-xs text-[#6b7280] font-normal ml-1">
// //                                 (Max 1 MB)
// //                               </span>
// //                             </label>
// //                             <div className="file-input-wrap relative w-full h-11">
// //                               <input
// //                                 type="text"
// //                                 className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
// //                                 placeholder="Upload Document"
// //                                 value={bankProofName}
// //                                 readOnly
// //                               />
// //                               <svg
// //                                 className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
// //                                 viewBox="0 0 24 24"
// //                                 fill="none"
// //                                 stroke="currentColor"
// //                                 strokeWidth="1.5"
// //                               >
// //                                 <path d="M12 5v14M5 12l7-7 7 7" />
// //                               </svg>
// //                               <input
// //                                 type="file"
// //                                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
// //                                 accept=".pdf,.jpg,.png"
// //                                 onChange={(e) =>
// //                                   handleFileChange(
// //                                     e,
// //                                     setBankProofFile,
// //                                     setBankProofName,
// //                                   )
// //                                 }
// //                               />
// //                             </div>
// //                           </div>
// //                         </div>

// //                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
// //                           <div className="form-col full flex-1">
// //                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
// //                               Others{" "}
// //                               <span className="text-xs text-[#6b7280] font-normal ml-1">
// //                                 (Max 1 MB each)
// //                               </span>
// //                             </label>
// //                             <div id="othersDocContainer">
// //                               {othersDocs.map((doc, idx) => (
// //                                 <div
// //                                   key={doc.id}
// //                                   className="others-doc-entry flex items-center gap-2.5 mb-2.5 flex-wrap"
// //                                 >
// //                                   <input
// //                                     type="text"
// //                                     className="field-input flex-1 min-w-[180px] h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
// //                                     placeholder="Enter document name (e.g. Passport, NOC...)"
// //                                     value={doc.name}
// //                                     onChange={(e) =>
// //                                       handleOthersDocNameChange(
// //                                         doc.id,
// //                                         e.target.value,
// //                                       )
// //                                     }
// //                                   />
// //                                   <div className=" flex-1 min-w-[200px] relative h-11">
// //                                     <input
// //                                       type="text"
// //                                       className=" w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-[#f8fafc] cursor-not-allowed"
// //                                       placeholder="Upload Document"
// //                                       value={doc.fileName}
// //                                       readOnly
// //                                     />
// //                                     <svg
// //                                       className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
// //                                       viewBox="0 0 24 24"
// //                                       fill="none"
// //                                       stroke="currentColor"
// //                                       strokeWidth="1.5"
// //                                     >
// //                                       <path d="M12 5v14M5 12l7-7 7 7" />
// //                                     </svg>
// //                                     <input
// //                                       type="file"
// //                                       className="absolute inset-0 w-full h-full opacity-0 cursor-not-allowed"
// //                                       accept=".pdf,.jpg,.png"
// //                                       disabled={!doc.name}
// //                                       onChange={(e) =>
// //                                         handleOthersDocFileChange(
// //                                           doc.id,
// //                                           e.target.files?.[0] || null,
// //                                           e.target.files?.[0]?.name || "",
// //                                         )
// //                                       }
// //                                     />
// //                                   </div>
// //                                   {idx > 0 && (
// //                                     <button
// //                                       type="button"
// //                                       className="others-remove-btn bg-none border-none text-[#c62828] text-lg cursor-pointer p-0 leading-none"
// //                                       onClick={() =>
// //                                         handleRemoveOthersDoc(doc.id)
// //                                       }
// //                                     >
// //                                       ✕
// //                                     </button>
// //                                   )}
// //                                 </div>
// //                               ))}
// //                             </div>
// //                             <button
// //                               type="button"
// //                               id="addMoreOthersBtn"
// //                               className="inline-btn hidden mt-2.5 w-auto py-1.5 px-[18px] text-[13px] bg-[#003366] text-white border-[1.5px] border-[#003366] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
// //                               onClick={handleAddOthersDoc}
// //                             >
// //                               + Add More Document
// //                             </button>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 {/* Panel 6: Live Selfie */}
// //                 {currentStep === 5 && (
// //                   <div className="panel-item active block border-none bg-transparent">
// //                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
// //                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
// //                         Live Selfie Verification
// //                       </span>
// //                     </div>
// //                     <div className="panel-body overflow-visible">
// //                       <div className="panel-content min-h-[400px] flex flex-col items-center justify-center gap-6">
// //                         <div
// //                           id="camera-container"
// //                           className="w-[280px] h-[280px] bg-[#f8fafc] border-2 border-dashed border-[#003366] rounded-full overflow-hidden flex justify-center items-center relative"
// //                         >
// //                           {!cameraActive && !selfieCaptured && (
// //                             <svg
// //                               id="camera-placeholder"
// //                               className="w-16 h-16 text-[#cbd5e1]"
// //                               fill="none"
// //                               viewBox="0 0 24 24"
// //                               stroke="currentColor"
// //                             >
// //                               <path
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                                 strokeWidth="2"
// //                                 d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
// //                               />
// //                               <path
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                                 strokeWidth="2"
// //                                 d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
// //                               />
// //                             </svg>
// //                           )}
// //                           <video
// //                             ref={videoRef}
// //                             autoPlay
// //                             playsInline
// //                             className={`${cameraActive && !selfieCaptured ? "block" : "hidden"} w-full h-full object-cover absolute inset-0`}
// //                           ></video>
// //                           <canvas
// //                             ref={canvasRef}
// //                             className={`${selfieCaptured ? "block" : "hidden"} w-full h-full object-cover absolute inset-0`}
// //                           ></canvas>
// //                         </div>
// //                         <div className="flex gap-4 items-center">
// //                           {!cameraActive && !selfieCaptured && (
// //                             <button
// //                               type="button"
// //                               className="create-btn w-[200px] h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
// //                               onClick={handleStartCamera}
// //                             >
// //                               Open Camera
// //                             </button>
// //                           )}
// //                           {cameraActive && !selfieCaptured && (
// //                             <button
// //                               type="button"
// //                               className="create-btn w-[200px] h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
// //                               onClick={handleCaptureSelfie}
// //                             >
// //                               Capture Selfie
// //                             </button>
// //                           )}
// //                           {selfieCaptured && (
// //                             <button
// //                               type="button"
// //                               className="inline-btn w-auto px-4 h-11 bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
// //                               onClick={handleRetakeSelfie}
// //                             >
// //                               Retake Photo
// //                             </button>
// //                           )}
// //                         </div>

// //                         <div className="w-full border-t border-[#e2e8f0] mt-4 pt-4">
// //                           <div className="tc-row flex items-center justify-start gap-2 mt-2">
// //                             <input
// //                               type="checkbox"
// //                               className="tc-cb w-4 h-4 border-[1.5px] border-[#e0e0e0] cursor-pointer accent-[#003366]"
// //                               id="tcCheck"
// //                               checked={tcChecked}
// //                               onChange={(e) => setTcChecked(e.target.checked)}
// //                             />
// //                             <label
// //                               className="tc-text text-[13px] text-[#333] font-roboto"
// //                               htmlFor="tcCheck"
// //                             >
// //                               I hereby declare that the information provided by
// //                               me is true and correct to the best of my
// //                               knowledge.
// //                             </label>
// //                           </div>
// //                           <button
// //                             type="submit"
// //                             className="create-btn w-full h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors mt-6"
// //                           >
// //                             Create Account
// //                           </button>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}

// //                 <div className="text-right text-[#c62828] text-xs font-medium mt-2.5">
// //                   All fields marked with * are mandatory.
// //                 </div>
// //                 <div className="next-arrow-container flex justify-center mt-7.5 mb-2.5">
// //                   <button
// //                     type="button"
// //                     className="create-btn w-full h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors mt-6"   
// //                     onClick={handleNextStep}
// //                   >
// //                     Save &amp; Next
// //                   </button>
// //                 </div>

// //                 <div className="login-row flex justify-center items-center gap-1.5 mt-3.5">
// //                   <span className="text-[13px] text-[#333] font-roboto">
// //                     Already have an account?
// //                   </span>
// //                   <a
// //                     href="welcome.html"
// //                     className="text-[13px] text-[#003366] font-bold underline font-source-sans"
// //                   >
// //                     Log in
// //                   </a>
// //                 </div>
// //               </form>
// //             ) : (
// //               <div id="reviewSection" className="animate-[fadeIn_0.4s_ease]">
// //                 <h2 className="form-title text-[34px] font-bold text-[#003366] font-source-sans mb-0.5">
// //                   Review Your Details
// //                 </h2>
// //                 <p className="form-subtitle text-base text-[#888] font-roboto mb-5">
// //                   Please verify your information before final submission.
// //                 </p>
// //                 <div
// //                   id="reviewContent"
// //                   className="bg-white p-6 rounded-md mb-6 border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
// //                 >
// //                   {renderReviewContent()}
// //                 </div>
// //                 <div className="flex gap-4 mt-6">
// //                   <button
// //                     type="button"
// //                     className="inline-btn w-1/2 h-12 text-base bg-transparent text-[#666] border-1.5 border-[#003366] rounded-none font-bold font-source-sans cursor-pointer"
// //                     onClick={handleEditReview}
// //                   >
// //                     Edit Details
// //                   </button>
// //                   <button
// //                     type="button"
// //                     className="create-btn w-1/2 h-12 text-base bg-[#003366] text-white border-none font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
// //                     onClick={handleConfirmSubmit}
// //                   >
// //                     Confirm &amp; Submit
// //                   </button>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           <div className="form-footer py-2.5 px-5 md:px-[100px] flex justify-center items-center flex-wrap gap-1">
// //             <span className="footer-copy text-xs text-[#6b7280] font-source-sans">
// //               © 2026 OMS (India) Limited. All rights reserved.
// //             </span>
// //             <span className="footer-links text-xs font-source-sans">
// //               <a
// //                 href="#"
// //                 className="text-[#1a56db] no-underline hover:underline"
// //               >
// //                 Privacy Policy
// //               </a>
// //               <span className="sep mx-1.5 text-[#6b7280]">|</span>
// //               <a
// //                 href="#"
// //                 className="text-[#1a56db] no-underline hover:underline"
// //               >
// //                 Terms of Use
// //               </a>
// //               <span className="sep mx-1.5 text-[#6b7280]">|</span>
// //               <a
// //                 href="#"
// //                 className="text-[#1a56db] no-underline hover:underline"
// //               >
// //                 Help &amp; Support
// //               </a>
// //             </span>
// //           </div>
// //         </div>

// //         {/* RIGHT PANEL */}
// //         <div
// //           className="right-panel sticky top-9 self-start h-[calc(100vh-54px)] w-full md:w-[35%] bg-cover bg-right bg-no-repeat flex flex-col justify-end px-5 md:px-20 pb-10 text-white relative"
// //           style={{ backgroundImage: "url('/building_bg.jpg')" }}
// //         >
// //           <div className="right-overlay absolute inset-0 bg-gradient-to-b from-[rgba(15,52,96,0.2)] to-[rgba(15,52,96,0.9)] z-0"></div>
// //           <div className="right-content relative z-10 max-w-[500px]">
// //             <div className="right-headline text-[40px] font-bold leading-tight mb-6 font-source-sans">
// //               Driving Excellence in Examination Services across India.
// //             </div>
// //             <div className="right-desc text-base leading-relaxed opacity-90 mb-8 font-roboto">
// //               Sign up as a observer to play a vital role in ensuring fair and
// //               transparent examination processes across the country.
// //             </div>
// //             <div className="right-credit text-xs opacity-60">
// //               Building Excellence by xyz
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <OMSVersionFooter />

// //       {/* OTP Modal */}
// //       <OtpModal
// //         isOpen={otpModalOpen}
// //         title={
// //           otpContext === "email"
// //             ? "Verify Email Address"
// //             : otpContext === "mobile"
// //               ? "Verify Mobile Number"
// //               : "Verify Aadhar Number"
// //         }
// //         description={`An OTP has been sent to ${otpTarget}.`}
// //         onVerify={handleVerifyOtp}
// //         onCancel={() => {
// //           setOtpModalOpen(false);
// //           setOtpContext(null);
// //           setOtpTarget("");
// //         }}
// //       />

// //       <style>{`
// //         @keyframes fadeIn {
// //           from {
// //             opacity: 0;
// //             transform: translateY(10px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //         .field-label::after {
// //           content: " *";
// //           color: #cc3333;
// //         }
// //         input[type="email"].field-input,
// //         #email.field-input {
// //           text-transform: none;
// //         }
// //         .field-input::placeholder {
// //           color: #aaa;
// //           text-transform: none;
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default SignupObserver;




// import React, {
//   useState,
//   useRef,
//   useEffect,
//   ChangeEvent,
//   FormEvent,
// } from "react";
// import OMSVersionFooter from "../components/OMSVersionFooter";

// // ---------- TYPE DEFINITIONS ----------
// interface Step {
//   id: string;
//   title: string;
// }

// interface OrgSubTypeMap {
//   [key: string]: string[];
// }

// interface IfscBranchMap {
//   [key: string]: string;
// }

// interface StateCityMap {
//   [key: string]: string[];
// }

// interface AdditionalOrg {
//   id: number;
// }

// interface OthersDocEntry {
//   id: number;
//   name: string;
//   fileName: string;
//   file: File | null;
// }

// interface ApiResponse {
//   success: boolean;
//   message: string;
//   data: {
//     observer: {
//       fldObserverId: number;
//       fldRegistrationStep: number;
//       fldRegistrationStatus: string;
//       [key: string]: any;
//     };
//     token?: string;
//   };
// }

// // ---------- CONSTANTS & MOCK DATA ----------
// const API_BASE_URL = "http://192.168.14.220:3000/api"; // Update with your actual API base URL

// const STEPS: Step[] = [
//   { id: "panel-personal", title: "Personal Details" },
//   { id: "panel-verification-banking", title: "Verification & Banking Details" },
//   { id: "panel-professional", title: "Educational & Professional Details" },
//   { id: "panel-address", title: "Address Details" },
//   { id: "panel-documents", title: "Upload Section" },
//   { id: "panel-selfie", title: "Live Selfie Verification" },
// ];

// const ORG_SUB_TYPES_MAP: OrgSubTypeMap = {
//   "Institute / College / School": ["Government", "Private"],
//   University: ["Government", "Private"],
//   "Public Sector": ["State", "Central"],
// };

// const IFSC_BRANCH_MAP: IfscBranchMap = {
//   SBIN0001234: "SBI Connaught Place, New Delhi",
//   SBIN0005936 : "Sector-2",
//   SBIN0002345: "SBI Bandra West, Mumbai",
//   SBIN0003456: "SBI MG Road, Bangalore",
//   SBIN0004567: "SBI Anna Salai, Chennai",
//   SBIN0005678: "SBI Hazratganj, Lucknow",
//   HDFC0001234: "HDFC Nariman Point, Mumbai",
//   HDFC0002345: "HDFC Cyber City, Gurugram",
//   HDFC0003456: "HDFC Koramangala, Bangalore",
//   HDFC0004567: "HDFC Salt Lake, Kolkata",
//   HDFC0005678: "HDFC Banjara Hills, Hyderabad",
//   ICIC0001234: "ICICI Lower Parel, Mumbai",
//   ICIC0002345: "ICICI Sector 17, Chandigarh",
//   ICIC0003456: "ICICI Ashok Nagar, Chennai",
//   ICIC0004567: "ICICI Civil Lines, Jaipur",
//   ICIC0005678: "ICICI Gomti Nagar, Lucknow",
//   KKBK0001234: "Kotak BKC, Mumbai",
//   KKBK0002345: "Kotak Indiranagar, Bangalore",
//   KKBK0003456: "Kotak Jubilee Hills, Hyderabad",
//   UTIB0001234: "Axis Nehru Place, New Delhi",
//   UTIB0002345: "Axis FC Road, Pune",
//   UTIB0003456: "Axis Alwarpet, Chennai",
//   PUNB0001234: "PNB Chandni Chowk, Delhi",
//   PUNB0002345: "PNB Civil Lines, Allahabad",
//   PUNB0003456: "PNB Station Road, Patna",
// };

// const STATE_CITY_MAP: StateCityMap = {
//   Maharashtra: [
//     "Mumbai",
//     "Pune",
//     "Nagpur",
//     "Nashik",
//     "Aurangabad",
//     "Solapur",
//     "Amravati",
//     "Thane",
//   ],
//   Gujarat: [
//     "Ahmedabad",
//     "Surat",
//     "Vadodara",
//     "Rajkot",
//     "Bhavnagar",
//     "Jamnagar",
//     "Gandhinagar",
//   ],
//   Karnataka: [
//     "Bangalore",
//     "Mysore",
//     "Hubli",
//     "Mangalore",
//     "Belgaum",
//     "Dharwad",
//     "Gulbarga",
//   ],
//   "Tamil Nadu": [
//     "Chennai",
//     "Coimbatore",
//     "Madurai",
//     "Tiruchirappalli",
//     "Salem",
//     "Tirunelveli",
//     "Erode",
//   ],
//   Delhi: [
//     "New Delhi",
//     "North Delhi",
//     "South Delhi",
//     "East Delhi",
//     "West Delhi",
//   ],
//   "Uttar Pradesh": [
//     "Lucknow",
//     "Kanpur",
//     "Ghaziabad",
//     "Agra",
//     "Meerut",
//     "Varanasi",
//     "Prayagraj",
//   ],
//   "West Bengal": [
//     "Kolkata",
//     "Howrah",
//     "Durgapur",
//     "Asansol",
//     "Siliguri",
//     "Kharagpur",
//   ],
//   Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga"],
//   "Andhra Pradesh": [
//     "Visakhapatnam",
//     "Vijayawada",
//     "Guntur",
//     "Nellore",
//     "Kurnool",
//     "Rajahmundry",
//   ],
// };

// const updateFieldColor = (el: HTMLSelectElement | HTMLInputElement) => {
//   if (el.value !== "") {
//     el.style.color = "#1a2b4a";
//   } else {
//     el.style.color = "#aaa";
//   }
// };

// // ---------- API SERVICE ----------
// class ApiService {
//   private static instance: ApiService;
//   private authToken: string | null = null;

//   static getInstance(): ApiService {
//     if (!ApiService.instance) {
//       ApiService.instance = new ApiService();
//     }
//     return ApiService.instance;
//   }

//   setAuthToken(token: string) {
//     this.authToken = token;
//     localStorage.setItem("authToken", token);
//   }

//   getAuthToken(): string | null {
//     if (!this.authToken) {
//       this.authToken = localStorage.getItem("authToken");
//     }
//     return this.authToken;
//   }

//   private async request<T>(
//     endpoint: string,
//     options: RequestInit = {}
//   ): Promise<T> {
//     const token = this.getAuthToken();
//     const headers: HeadersInit = {
//       "Content-Type": "application/json",
//       ...options.headers,
//     };

//     if (token) {
//       headers["Authorization"] = `Bearer ${token}`;
//     }

//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       ...options,
//       headers,
//     });

//     if (!response.ok) {
//       const error = await response.json().catch(() => ({}));
//       throw new Error(error.message || `API Error: ${response.status}`);
//     }

//     return response.json();
//   }

//   private async uploadRequest<T>(
//     endpoint: string,
//     formData: FormData
//   ): Promise<T> {
//     const token = this.getAuthToken();
//     const headers: HeadersInit = {};

//     if (token) {
//       headers["Authorization"] = `Bearer ${token}`;
//     }

//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: "POST",
//       headers,
//       body: formData,
//     });

//     if (!response.ok) {
//       const error = await response.json().catch(() => ({}));
//       throw new Error(error.message || `Upload Error: ${response.status}`);
//     }

//     return response.json();
//   }

//   async saveStep1(payload: any): Promise<ApiResponse> {
//     console.log("my playload on step1", payload);
//     const response = await this.request<ApiResponse>("/observer/step-1", {
//       method: "POST",
//       body: JSON.stringify(payload),
//     });
//     if (response.data?.token) {
//       this.setAuthToken(response.data.token);
//     }
//     return response;
//   }

//   async saveStep2(observerId: number, payload: any): Promise<ApiResponse> {
//      console.log("my playload on step2", payload);
//     return this.request<ApiResponse>(`/observer/step-2/${observerId}`, {
//       method: "POST",
//       body: JSON.stringify(payload),
//     });
//   }

//   async saveStep3(observerId: number, payload: any): Promise<ApiResponse> {
//      console.log("my playload on step3", payload);
//     return this.request<ApiResponse>(`/observer/step-3/${observerId}`, {
//       method: "POST",
//       body: JSON.stringify(payload),
//     });
//   }

//   async saveStep4(observerId: number, payload: any): Promise<ApiResponse> {
//      console.log("my playload on step4", payload);
//     return this.request<ApiResponse>(`/observer/step-4/${observerId}`, {
//       method: "POST",
//       body: JSON.stringify(payload),
//     });
//   }

//   async saveStep5(observerId: number, formData: FormData): Promise<ApiResponse> {
//      console.log("my playload on step5", formData);
//     return this.uploadRequest<ApiResponse>(`/observer/step-5/${observerId}`, formData);
//   }

//   async saveStep6(observerId: number, formData: FormData): Promise<ApiResponse> {
//      console.log("my playload on step6", formData);
//     return this.uploadRequest<ApiResponse>(`/observer/step-6/${observerId}`, formData);
//   }

//   async finalSubmit(observerId: number): Promise<ApiResponse> {
//      console.log("my playload on final step", observerId);
//     return this.request<ApiResponse>(`/observer/final-submit/${observerId}`, {
//       method: "POST",
//     });
//   }
// }

// const apiService = ApiService.getInstance();

// // ---------- CUSTOM HOOK FOR STEP MANAGEMENT ----------
// const useStepManagement = () => {
//   const [observerId, setObserverId] = useState<number | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleApiError = (error: any, stepName: string) => {
//     console.error(`Error in ${stepName}:`, error);
//     setError(error.message || `Failed to save ${stepName}`);
//     setTimeout(() => setError(null), 5000);
//     return false;
//   };

//   const savePersonalDetails = async (data: any): Promise<boolean> => {
//     setIsSubmitting(true);
//     try {
//       const response = await apiService.saveStep1(data);
//       if (response.success && response.data?.observer?.fldObserverId) {
//         setObserverId(response.data.observer.fldObserverId);
//         return true;
//       }
//       throw new Error(response.message || "Failed to save personal details");
//     } catch (error) {
//       return handleApiError(error, "Personal Details");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const saveBankingDetails = async (data: any): Promise<boolean> => {
//     if (!observerId) {
//       setError("Observer ID not found. Please complete previous step first.");
//       return false;
//     }
    
//     setIsSubmitting(true);
//     try {
//       const response = await apiService.saveStep2(observerId, data);
//       return response.success;
//     } catch (error) {
//       return handleApiError(error, "Banking Details");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const saveProfessionalDetails = async (data: any): Promise<boolean> => {
//     if (!observerId) {
//       setError("Observer ID not found. Please complete previous step first.");
//       return false;
//     }
    
//     setIsSubmitting(true);
//     try {
//       const response = await apiService.saveStep3(observerId, data);
//       return response.success;
//     } catch (error) {
//       return handleApiError(error, "Professional Details");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const saveAddressDetails = async (data: any): Promise<boolean> => {
//     if (!observerId) {
//       setError("Observer ID not found. Please complete previous step first.");
//       return false;
//     }
    
//     setIsSubmitting(true);
//     try {
//       const response = await apiService.saveStep4(observerId, data);
//       return response.success;
//     } catch (error) {
//       return handleApiError(error, "Address Details");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const saveDocuments = async (formData: FormData): Promise<boolean> => {
//     if (!observerId) {
//       setError("Observer ID not found. Please complete previous step first.");
//       return false;
//     }
    
//     setIsSubmitting(true);
//     try {
//       const response = await apiService.saveStep5(observerId, formData);
//       return response.success;
//     } catch (error) {
//       return handleApiError(error, "Documents Upload");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const saveSelfie = async (selfieFile: File): Promise<boolean> => {
//     if (!observerId) {
//       setError("Observer ID not found. Please complete previous step first.");
//       return false;
//     }
    
//     setIsSubmitting(true);
//     try {
//       const formData = new FormData();
//       formData.append("fldSelfieImage", selfieFile);
//       const response = await apiService.saveStep6(observerId, formData);
//       return response.success;
//     } catch (error) {
//       return handleApiError(error, "Selfie Upload");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const submitFinal = async (): Promise<boolean> => {
//     if (!observerId) {
//       setError("Observer ID not found. Please complete previous step first.");
//       return false;
//     }
    
//     setIsSubmitting(true);
//     try {
//       const response = await apiService.finalSubmit(observerId);
//       return response.success;
//     } catch (error) {
//       return handleApiError(error, "Final Submission");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return {
//     observerId,
//     isSubmitting,
//     error,
//     savePersonalDetails,
//     saveBankingDetails,
//     saveProfessionalDetails,
//     saveAddressDetails,
//     saveDocuments,
//     saveSelfie,
//     submitFinal,
//   };
// };

// interface CustomMultiSelectProps {
//   cities: string[];
//   selectedCities: string[];
//   onToggleCity: (city: string) => void;
//   maxSelect?: number;
// }

// const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
//   cities,
//   selectedCities,
//   onToggleCity,
//   maxSelect = 3,
// }) => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const filteredCities = cities.filter((city) =>
//     city.toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//   const removeCity = (city: string) => {
//     onToggleCity(city);
//   };

//   return (
//     <div className="custom-multi-select relative w-full" ref={containerRef}>
//       <div
//         className={`cms-header min-h-[44px] border-[1.5px] border-[#e0e0e0] bg-white flex items-center justify-between px-[14px] py-1 cursor-pointer transition-colors ${isOpen ? "border-[#003366] rounded-t-none" : ""}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="cms-tags flex flex-wrap gap-1.5 flex-1 items-center min-h-[32px]">
//           {selectedCities.length === 0 ? (
//             <span className="cms-placeholder text-[#aaa] text-[13px]">
//               Select all options
//             </span>
//           ) : (
//             selectedCities.map((city) => (
//               <div
//                 key={city}
//                 className="cms-tag bg-[#003366] text-white px-2 py-1 rounded text-[13px] flex items-center gap-1.5 font-medium"
//               >
//                 {city}
//                 <i
//                   className="not-italic text-base leading-[0.8] cursor-pointer hover:text-[#f87171]"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     removeCity(city);
//                   }}
//                 >
//                   ×
//                 </i>
//               </div>
//             ))
//           )}
//         </div>
//         <div className="cms-arrow text-[#94a3b8] text-xs ml-2">▼</div>
//       </div>
//       {isOpen && (
//         <div className="cms-dropdown absolute top-full left-0 w-full bg-white border-[1.5px] border-[#003366] border-t-0 shadow-lg z-10 flex flex-col">
//           <div className="cms-search p-2 border-b border-[#f1f5f9]">
//             <input
//               type="text"
//               className="field-input h-9 px-2.5 rounded text-[13px] border border-[#e2e8f0] w-full focus:border-[#003366] focus:outline-none"
//               placeholder="Search city..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onClick={(e) => e.stopPropagation()}
//             />
//           </div>
//           <div className="cms-options max-h-[200px] overflow-y-auto py-1">
//             {filteredCities.length === 0 ? (
//               <div className="px-3 py-3 text-[#94a3b8] text-[13px] text-center">
//                 No cities found
//               </div>
//             ) : (
//               filteredCities.map((city) => {
//                 const isSelected = selectedCities.includes(city);
//                 const isDisabled =
//                   !isSelected && selectedCities.length >= maxSelect;
//                 return (
//                   <div
//                     key={city}
//                     className={`cms-option px-3 py-2 flex items-center gap-2.5 cursor-pointer text-sm text-[#475569] hover:bg-[#f8fafc] hover:text-[#003366] ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
//                     onClick={() => !isDisabled && onToggleCity(city)}
//                   >
//                     <input
//                       type="checkbox"
//                       checked={isSelected}
//                       readOnly
//                       tabIndex={-1}
//                       className="w-4 h-4 accent-[#003366]"
//                     />
//                     <span>{city}</span>
//                   </div>
//                 );
//               })
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // ---------- OTP MODAL COMPONENT ----------
// interface OtpModalProps {
//   isOpen: boolean;
//   title: string;
//   description: string;
//   onVerify: (otp: string) => void;
//   onCancel: () => void;
// }

// const OtpModal: React.FC<OtpModalProps> = ({
//   isOpen,
//   title,
//   description,
//   onVerify,
//   onCancel,
// }) => {
//   const [otp, setOtp] = useState<string>("");

//   if (!isOpen) return null;

//   const handleVerify = () => {
//     if (otp.trim()) {
//       onVerify(otp);
//       setOtp("");
//     } else {
//       alert("Please enter the OTP.");
//     }
//   };

//   return (
//     <div className="modal-overlay fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center">
//       <div className="modal-dialog bg-white w-[400px] max-w-[90%] rounded-lg p-6 shadow-lg">
//         <h3 className="modal-title text-xl text-[#003366] font-source-sans font-bold mb-2">
//           {title}
//         </h3>
//         <p className="modal-desc text-sm text-[#666] mb-5 font-roboto">
//           {description}
//         </p>
//         <div className="modal-body">
//           <input
//             type="text"
//             className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white mb-4"
//             placeholder="Enter OTP (XXXX)"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button
//             type="button"
//             className="create-btn w-full h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
//             onClick={handleVerify}
//           >
//             Verify
//           </button>
//           <button
//             type="button"
//             className="inline-btn w-full bg-transparent text-[#666] border-none mt-2 text-sm font-roboto cursor-pointer"
//             onClick={onCancel}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ---------- LOADING OVERLAY COMPONENT ----------
// const LoadingOverlay: React.FC<{ message?: string }> = ({ message = "Saving..." }) => (
//   <div className="fixed inset-0 bg-black/50 z-[10000] flex items-center justify-center">
//     <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4">
//       <div className="w-12 h-12 border-4 border-[#003366] border-t-transparent rounded-full animate-spin"></div>
//       <p className="text-[#003366] font-semibold">{message}</p>
//     </div>
//   </div>
// );

// // ---------- MAIN COMPONENT ----------
// const SignupObserver: React.FC = () => {
//   // ----- Form State -----
//   // Personal Details
//   const [firstName, setFirstName] = useState<string>("");
//   const [lastName, setLastName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [emailVerified, setEmailVerified] = useState<boolean>(false);
//   const [dob, setDob] = useState<string>("");
//   const [gender, setGender] = useState<string>("");
//   const [nationality, setNationality] = useState<string>("");
//   const [phone, setPhone] = useState<string>("");
//   const [phoneVerified, setPhoneVerified] = useState<boolean>(false);
//   const [altPhone, setAltPhone] = useState<string>("");

//   // Verification & Banking
//   const [aadhar, setAadhar] = useState<string>("");
//   const [aadharVerified, setAadharVerified] = useState<boolean>(false);
//   const [pan, setPan] = useState<string>("");
//   const [bankName, setBankName] = useState<string>("");
//   const [otherBankName, setOtherBankName] = useState<string>("");
//   const [ifscCode, setIfscCode] = useState<string>("");
//   const [branchName, setBranchName] = useState<string>("");
//   const [accountNumber, setAccountNumber] = useState<string>("");

//   // Educational & Professional
//   const [highestQualification, setHighestQualification] = useState<string>("");
//   const [instituteUniversity, setInstituteUniversity] = useState<string>("");
//   const [employmentStatus, setEmploymentStatus] = useState<
//     "working" | "retired"
//   >("working");
//   // Working fields
//   const [currOrgType, setCurrOrgType] = useState<string>("");
//   const [currOrgSubType, setCurrOrgSubType] = useState<string>("");
//   const [currOrgName, setCurrOrgName] = useState<string>("");
//   const [currPost, setCurrPost] = useState<string>("");
//   const [currFromMonth, setCurrFromMonth] = useState<string>("");
//   const [currFromYear, setCurrFromYear] = useState<string>("");
//   // Retired fields
//   const [lastOrgType, setLastOrgType] = useState<string>("");
//   const [lastOrgSubType, setLastOrgSubType] = useState<string>("");
//   const [lastOrgName, setLastOrgName] = useState<string>("");
//   const [lastPost, setLastPost] = useState<string>("");
//   const [dateOfRetirement, setDateOfRetirement] = useState<string>("");
//   // Additional Organisations
//   const [additionalOrgs, setAdditionalOrgs] = useState<AdditionalOrg[]>([]);
//   const [additionalOrgsData, setAdditionalOrgsData] = useState<any[]>([]);

//   // Address Details
//   const [resState, setResState] = useState<string>("");
//   const [resCity, setResCity] = useState<string>("");
//   const [resPin, setResPin] = useState<string>("");
//   const [resAddr1, setResAddr1] = useState<string>("");
//   const [resAddr2, setResAddr2] = useState<string>("");
//   const [prefState, setPrefState] = useState<string>("");
//   const [selectedCities, setSelectedCities] = useState<string[]>([]);
//   const [currOrgState, setCurrOrgState] = useState<string>("");
//   const [currOrgCity, setCurrOrgCity] = useState<string>("");
//   const [currOrgPin, setCurrOrgPin] = useState<string>("");
//   const [currOrgAddr1, setCurrOrgAddr1] = useState<string>("");
//   const [currOrgAddr2, setCurrOrgAddr2] = useState<string>("");
//   const [lastOrgState, setLastOrgState] = useState<string>("");
//   const [lastOrgCity, setLastOrgCity] = useState<string>("");
//   const [lastOrgPin, setLastOrgPin] = useState<string>("");
//   const [lastOrgAddr1, setLastOrgAddr1] = useState<string>("");
//   const [lastOrgAddr2, setLastOrgAddr2] = useState<string>("");

//   // Upload Section
//   const [eduProofFile, setEduProofFile] = useState<File | null>(null);
//   const [eduProofName, setEduProofName] = useState<string>("");
//   const [workingProofType, setWorkingProofType] = useState<string>("");
//   const [empProofFile, setEmpProofFile] = useState<File | null>(null);
//   const [empProofName, setEmpProofName] = useState<string>("");
//   const [lastOrgProofType, setLastOrgProofType] = useState<string>("");
//   const [lastCertFile, setLastCertFile] = useState<File | null>(null);
//   const [lastCertName, setLastCertName] = useState<string>("");
//   const [aadharUploadFile, setAadharUploadFile] = useState<File | null>(null);
//   const [aadharUploadName, setAadharUploadName] = useState<string>("");
//   const [panUploadFile, setPanUploadFile] = useState<File | null>(null);
//   const [panUploadName, setPanUploadName] = useState<string>("");
//   const [bankProofFile, setBankProofFile] = useState<File | null>(null);
//   const [bankProofName, setBankProofName] = useState<string>("");
//   const [othersDocs, setOthersDocs] = useState<OthersDocEntry[]>([
//     { id: Date.now(), name: "", fileName: "", file: null },
//   ]);

//   // Selfie
//   const [selfieCaptured, setSelfieCaptured] = useState<boolean>(false);
//   const [cameraActive, setCameraActive] = useState<boolean>(false);
//   const [selfieFile, setSelfieFile] = useState<File | null>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const cameraStreamRef = useRef<MediaStream | null>(null);

//   // UI State
//   const [currentStep, setCurrentStep] = useState<number>(0);
//   const [showReview, setShowReview] = useState<boolean>(false);
//   const [tcChecked, setTcChecked] = useState<boolean>(true);

//   // OTP Modal State
//   const [otpModalOpen, setOtpModalOpen] = useState<boolean>(false);
//   const [otpContext, setOtpContext] = useState<
//     "email" | "mobile" | "aadhar" | null
//   >(null);
//   const [otpTarget, setOtpTarget] = useState<string>("");

//   // Step Management Hook
//   const {
//     observerId,
//     isSubmitting,
//     error: apiError,
//     savePersonalDetails,
//     saveBankingDetails,
//     saveProfessionalDetails,
//     saveAddressDetails,
//     saveDocuments,
//     saveSelfie,
//     submitFinal,
//   } = useStepManagement();

//   // ----- Effects -----
//   // IFSC lookup effect
//   useEffect(() => {
//     if (!ifscCode) {
//       setBranchName("");
//       return;
//     }
//     const code = ifscCode.trim().toUpperCase();
//     const branch = IFSC_BRANCH_MAP[code];
//     if (branch) {
//       setBranchName(branch);
//     } else {
//       setBranchName("");
//     }
//   }, [ifscCode]);

//   // Disable future date for retirement
//   useEffect(() => {
//     const today = new Date().toISOString().split("T")[0];
//     const retirementInput = document.getElementById(
//       "dateOfRetirement",
//     ) as HTMLInputElement;
//     if (retirementInput) {
//       retirementInput.setAttribute("max", today);
//     }
//   }, []);

//   // Update select colors
//   useEffect(() => {
//     const selects = document.querySelectorAll('select, input[type="date"]');
//     selects.forEach((el) => {
//       if (el instanceof HTMLSelectElement || el instanceof HTMLInputElement) {
//         updateFieldColor(el);
//         el.addEventListener("change", () => updateFieldColor(el));
//       }
//     });
//   }, [currentStep]);

//   // ----- Handlers -----
//   const handleNextStep = async () => {
//     let success = true;

//     // Save current step data before proceeding
//     switch (currentStep) {
//       case 0: // Personal Details
//         const personalData = {
//           fldFirstName: firstName,
//           fldLastName: lastName,
//           fldEmailAddress: email,
//           fldDateOfBirth: dob,
//           fldGender: gender.charAt(0).toUpperCase() + gender.slice(1),
//           fldNationality: nationality.charAt(0).toUpperCase() + nationality.slice(1),
//           fldMobileNumber: phone,
//         };
//         success = await savePersonalDetails(personalData);
//         break;
//       case 1: // Banking Details
//         const bankingData = {
//           fldAadharNumber: aadhar,
//           fldPanNumber: pan,
//           fldBankName: bankName === "Others" ? otherBankName : bankName,
//           fldIfscCode: ifscCode,
//           fldBranchName: branchName,
//           fldAccountNumber: accountNumber,
//         };
//         success = await saveBankingDetails(bankingData);
//         break;
//       case 2: // Professional Details
//         const professionalData = {
//           fldHighestQualification: highestQualification,
//           fldInstituteUniversityName: instituteUniversity,
//           fldEmploymentStatus: employmentStatus === "working" ? "Working" : "Retired",
//           fldOrganizationType: employmentStatus === "working" ? currOrgType : lastOrgType,
//           fldLastOrganisationName: employmentStatus === "working" ? currOrgName : lastOrgName,
//           fldPostDesignation: employmentStatus === "working" ? currPost : lastPost,
//           fldDateOfRetirement: employmentStatus === "retired" ? dateOfRetirement : currFromMonth,
//         };
//         success = await saveProfessionalDetails(professionalData);
//         break;
//       case 3: // Address Details
//         const addressData = {
//           fldResidentialState: resState,
//           fldResidentialCityDistrict: resCity,
//           fldResidentialPinCode: resPin,
//           fldResidentialAddressLine1: resAddr1,
//           fldResidentialAddressLine2: resAddr2 || "",
//           fldPreferredState: prefState,
//           fldOrgState: employmentStatus === "working" ? currOrgState : lastOrgState,
//           fldOrgCityDistrict: employmentStatus === "working" ? currOrgCity : lastOrgCity,
//           fldOrgPinCode: employmentStatus === "working" ? currOrgPin : lastOrgPin,
//           fldOrgAddressLine1: employmentStatus === "working" ? currOrgAddr1 : lastOrgAddr1,
//           fldOrgAddressLine2: employmentStatus === "working" ? (currOrgAddr2 || "") : (lastOrgAddr2 || ""),
//         };
//         success = await saveAddressDetails(addressData);
//         break;
//       case 4: // Documents
//         const formData = new FormData();
//         if (eduProofFile) formData.append("fldEducationalDocument", eduProofFile);
//         if (aadharUploadFile) formData.append("fldAadharCard", aadharUploadFile);
//         if (panUploadFile) formData.append("fldPanCard", panUploadFile);
//         if (bankProofFile) formData.append("fldBankProof", bankProofFile);
//         if (employmentStatus === "working" && empProofFile) {
//           formData.append("fldEmploymentProof", empProofFile);
//         }
//         if (employmentStatus === "retired" && lastCertFile) {
//           formData.append("fldLastOrganisationProof", lastCertFile);
//         }
//         othersDocs.forEach((doc, index) => {
//           if (doc.file) {
//             formData.append(`fldOtherDocument_${index}`, doc.file);
//           }
//         });
//         success = await saveDocuments(formData);
//         break;
//     }

//     if (success && currentStep < STEPS.length - 1) {
//       setCurrentStep(currentStep + 1);
//       window.history.pushState({ step: currentStep + 1 }, "", "");
//       document.querySelector(".form-area")?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleFileChange = (
//     e: ChangeEvent<HTMLInputElement>,
//     setFile: React.Dispatch<React.SetStateAction<File | null>>,
//     setName: React.Dispatch<React.SetStateAction<string>>,
//   ) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const file = e.target.files[0];
//       setFile(file);
//       setName(file.name);
//     } else {
//       setFile(null);
//       setName("");
//     }
//   };

//   const handleAddOthersDoc = () => {
//     setOthersDocs([
//       ...othersDocs,
//       { id: Date.now(), name: "", fileName: "", file: null },
//     ]);
//   };

//   const handleRemoveOthersDoc = (id: number) => {
//     setOthersDocs(othersDocs.filter((doc) => doc.id !== id));
//   };

//   const handleOthersDocNameChange = (id: number, name: string) => {
//     setOthersDocs(
//       othersDocs.map((doc) => (doc.id === id ? { ...doc, name } : doc)),
//     );
//   };

//   const handleOthersDocFileChange = (
//     id: number,
//     file: File | null,
//     fileName: string,
//   ) => {
//     setOthersDocs(
//       othersDocs.map((doc) =>
//         doc.id === id ? { ...doc, file, fileName } : doc,
//       ),
//     );
//   };

//   const handleAddLastOrg = () => {
//     const newId = Date.now();
//     setAdditionalOrgs([...additionalOrgs, { id: newId }]);
//     setAdditionalOrgsData([
//       ...additionalOrgsData,
//       {
//         id: newId,
//         orgType: "",
//         orgSubType: "",
//         orgName: "",
//         post: "",
//         fromMonth: "",
//         fromYear: "",
//         toMonth: "",
//         toYear: "",
//       },
//     ]);
//   };

//   const handleRemoveLastOrg = (id: number) => {
//     setAdditionalOrgs(additionalOrgs.filter((org) => org.id !== id));
//     setAdditionalOrgsData(additionalOrgsData.filter((data) => data.id !== id));
//   };

//   const updateAdditionalOrgData = (
//     id: number,
//     field: string,
//     value: string,
//   ) => {
//     setAdditionalOrgsData(
//       additionalOrgsData.map((data) =>
//         data.id === id ? { ...data, [field]: value } : data,
//       ),
//     );
//   };

//   const handleToggleCity = (city: string) => {
//     if (selectedCities.includes(city)) {
//       setSelectedCities(selectedCities.filter((c) => c !== city));
//     } else if (selectedCities.length < 3) {
//       setSelectedCities([...selectedCities, city]);
//     }
//   };

//   const handleOpenOtpModal = (
//     context: "email" | "mobile" | "aadhar",
//     target: string,
//   ) => {
//     if (!target) {
//       alert(`Please enter your ${context} first.`);
//       return;
//     }
//     setOtpContext(context);
//     setOtpTarget(target);
//     setOtpModalOpen(true);
//   };

//   const handleVerifyOtp = (otp: string) => {
//     if (otpContext === "email") {
//       setEmailVerified(true);
//     } else if (otpContext === "mobile") {
//       setPhoneVerified(true);
//     } else if (otpContext === "aadhar") {
//       setAadharVerified(true);
//     }
//     setOtpModalOpen(false);
//     setOtpContext(null);
//     setOtpTarget("");
//   };

//   const handleStartCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       cameraStreamRef.current = stream;
//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//         videoRef.current.style.display = "block";
//         setCameraActive(true);
//       }
//     } catch (err) {
//       console.error("Error accessing camera:", err);
//       alert(
//         "Could not access the camera. Please ensure you have granted permission.",
//       );
//     }
//   };

//   const handleCaptureSelfie = () => {
//     if (videoRef.current && canvasRef.current) {
//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       const context = canvas.getContext("2d");
//       canvas.width = video.videoWidth;
//       canvas.height = video.videoHeight;
//       context?.drawImage(video, 0, 0, canvas.width, canvas.height);
      
//       // Convert canvas to file
//       canvas.toBlob((blob) => {
//         if (blob) {
//           const file = new File([blob], "selfie.jpg", { type: "image/jpeg" });
//           setSelfieFile(file);
//         }
//       }, "image/jpeg", 0.9);
      
//       video.style.display = "none";
//       canvas.style.display = "block";
//       setCameraActive(false);
//       setSelfieCaptured(true);
//       if (cameraStreamRef.current) {
//         cameraStreamRef.current.getTracks().forEach((track) => track.stop());
//       }
//     }
//   };

//   const handleRetakeSelfie = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       cameraStreamRef.current = stream;
//       if (videoRef.current && canvasRef.current) {
//         videoRef.current.srcObject = stream;
//         videoRef.current.style.display = "block";
//         canvasRef.current.style.display = "none";
//         setCameraActive(true);
//         setSelfieCaptured(false);
//         setSelfieFile(null);
//       }
//     } catch (err) {
//       console.error("Error accessing camera:", err);
//     }
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!tcChecked) {
//       alert("Please agree to the Terms & Conditions.");
//       return;
//     }
    
//     // Save selfie first
//     if (selfieFile) {
//       const selfieSaved = await saveSelfie(selfieFile);
//       if (!selfieSaved) {
//         alert("Failed to save selfie. Please try again.");
//         return;
//       }
//     }
    
//     setShowReview(true);
//     document.querySelector(".form-area")?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleEditReview = () => {
//     setShowReview(false);
//     document.querySelector(".form-area")?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleConfirmSubmit = async () => {
//     const success = await submitFinal();
//     if (success) {
//       window.location.href = "signup-confirmation.html";
//     } else {
//       alert("Failed to submit registration. Please try again.");
//     }
//   };

//   // ----- Render Helpers -----
//   const renderReviewContent = () => {
//     const sections = [
//       {
//         title: "Personal Details",
//         data: [
//           { label: "First Name", value: firstName },
//           { label: "Last Name", value: lastName },
//           {
//             label: "Email Address",
//             value: emailVerified ? email : "Not verified",
//           },
//           { label: "Date of Birth", value: dob },
//           { label: "Gender", value: gender },
//           { label: "Nationality", value: nationality },
//           {
//             label: "Mobile Number",
//             value: phoneVerified ? phone : "Not verified",
//           },
//           { label: "Alternate Mobile Number", value: altPhone || "-" },
//         ],
//       },
//       {
//         title: "Verification & Banking Details",
//         data: [
//           {
//             label: "Aadhar Number",
//             value: aadharVerified ? aadhar : "Not verified",
//           },
//           { label: "PAN Number", value: pan || "-" },
//           {
//             label: "Bank Name",
//             value: bankName === "Others" ? otherBankName : bankName,
//           },
//           { label: "IFSC Code", value: ifscCode || "-" },
//           { label: "Branch Name", value: branchName || "-" },
//           { label: "Account Number", value: accountNumber || "-" },
//         ],
//       },
//       {
//         title: "Educational & Professional Details",
//         data: [
//           { label: "Highest Qualification", value: highestQualification },
//           { label: "Institute/University", value: instituteUniversity },
//           {
//             label: "Employment Status",
//             value: employmentStatus === "working" ? "Working" : "Retired",
//           },
//           ...(employmentStatus === "working"
//             ? [
//                 { label: "Current Organisation Type", value: currOrgType },
//                 {
//                   label: "Current Organisation Sub-Type",
//                   value: currOrgSubType,
//                 },
//                 { label: "Current Organisation Name", value: currOrgName },
//                 { label: "Post/Designation", value: currPost },
//                 {
//                   label: "From Date",
//                   value: `${currFromMonth}/${currFromYear}`,
//                 },
//               ]
//             : [
//                 { label: "Last Organisation Type", value: lastOrgType },
//                 { label: "Last Organisation Sub-Type", value: lastOrgSubType },
//                 { label: "Last Organisation Name", value: lastOrgName },
//                 { label: "Post/Designation", value: lastPost },
//                 { label: "Date of Retirement", value: dateOfRetirement },
//               ]),
//         ],
//       },
//       {
//         title: "Address Details",
//         data: [
//           { label: "Residential State", value: resState },
//           { label: "Residential City", value: resCity },
//           { label: "Residential PIN", value: resPin },
//           { label: "Residential Address Line 1", value: resAddr1 },
//           { label: "Residential Address Line 2", value: resAddr2 || "-" },
//           { label: "Preferred State", value: prefState },
//           {
//             label: "Preferred Cities",
//             value: selectedCities.length > 0 ? selectedCities.join(", ") : "-",
//           },
//           { label: "Current Organisation State", value: currOrgState },
//           { label: "Current Organisation City", value: currOrgCity },
//           { label: "Current Organisation PIN", value: currOrgPin },
//           { label: "Current Organisation Address", value: currOrgAddr1 },
//           ...(employmentStatus === "retired"
//             ? [
//                 { label: "Last Organisation State", value: lastOrgState },
//                 { label: "Last Organisation City", value: lastOrgCity },
//                 { label: "Last Organisation PIN", value: lastOrgPin },
//                 { label: "Last Organisation Address", value: lastOrgAddr1 },
//               ]
//             : []),
//         ],
//       },
//       {
//         title: "Upload Section",
//         data: [
//           { label: "Educational Document", value: eduProofName || "-" },
//           ...(employmentStatus === "working"
//             ? [
//                 {
//                   label: "Current Organisation Proof Type",
//                   value: workingProofType || "-",
//                 },
//                 {
//                   label: "Current Organisation Proof",
//                   value: empProofName || "-",
//                 },
//               ]
//             : [
//                 {
//                   label: "Last Organisation Proof Type",
//                   value: lastOrgProofType || "-",
//                 },
//                 {
//                   label: "Last Organisation Proof",
//                   value: lastCertName || "-",
//                 },
//               ]),
//           { label: "Aadhar Card Upload", value: aadharUploadName || "-" },
//           { label: "PAN Card Upload", value: panUploadName || "-" },
//           { label: "Cancelled Cheque/Passbook", value: bankProofName || "-" },
//           ...othersDocs
//             .filter((doc) => doc.fileName)
//             .map((doc) => ({
//               label: doc.name || "Other Document",
//               value: doc.fileName,
//             })),
//         ],
//       },
//     ];

//     return (
//       <div className="flex flex-col gap-6">
//         {sections.map((section, idx) => (
//           <div key={idx}>
//             <h4 className="m-0 mb-4 text-[#003366] text-base border-b-2 border-[#e2e8f0] pb-2 font-semibold">
//               {section.title}
//             </h4>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {section.data.map((item, i) =>
//                 item.value &&
//                 item.value !== "-" &&
//                 item.value !== "Not verified" ? (
//                   <div key={i} className="flex flex-col gap-1">
//                     <span className="text-[13px] text-[#64748b] font-medium">
//                       {item.label}
//                     </span>
//                     <span className="text-sm text-[#0f172a] font-semibold break-words">
//                       {item.value}
//                     </span>
//                   </div>
//                 ) : null,
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const getAvailableCities = () => {
//     return STATE_CITY_MAP[prefState] || [];
//   };

//   const getCitiesForState = (state: string) => {
//     return STATE_CITY_MAP[state] || [];
//   };

//   const renderOrgTypeSelect = (
//     value: string,
//     onChange: (val: string) => void,
//     subTypeValue: string,
//     onSubTypeChange: (val: string) => void,
//     showSubType: boolean,
//   ) => {
//     const subTypes = ORG_SUB_TYPES_MAP[value] || [];
//     return (
//       <div className=" flex gap-6 mb-3 flex-col md:flex-row">
//         <div className=" flex-1">
//           <label className=" text-base font-normal text-[#003366] mb-1.5 block">
//             Organization Type
//           </label>
//           <select
//             className=" w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white appearance-auto cursor-pointer focus:border-[#003366] focus:outline-none"
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//           >
//             <option value="">Select Type</option>
//             <option value="Central Government">Central Government</option>
//             <option value="State Government">State Government</option>
//             <option value="Autonomous Body">Autonomous Body</option>
//             <option value="Institute / College / School">
//               Institute / College / School
//             </option>
//             <option value="University">University</option>
//             <option value="Public Sector">Public Sector</option>
//             <option value="Defence / Armed Forces">
//               Defence / Armed Forces
//             </option>
//           </select>
//         </div>
//         {showSubType && (
//           <div
//             className=" flex-1"
//             style={{ display: subTypes.length > 0 ? "flex" : "none" }}
//           >
//             <label className=" text-base font-normal text-[#003366] mb-1.5 block">
//               Sub-Type
//             </label>
//             <select
//               className=" w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white appearance-auto cursor-pointer focus:border-[#003366] focus:outline-none"
//               value={subTypeValue}
//               onChange={(e) => onSubTypeChange(e.target.value)}
//             >
//               <option value="">Select Sub-Type</option>
//               {subTypes.map((st) => (
//                 <option key={st} value={st}>
//                   {st}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}
//       </div>
//     );
//   };

//   // ----- Render -----
//   return (
//     <>
//       {(isSubmitting) && <LoadingOverlay message="Saving your information..." />}
//       {apiError && (
//         <div className="fixed top-20 right-5 z-[10001] bg-red-500 text-white px-4 py-2 rounded shadow-lg animate-pulse">
//           {apiError}
//         </div>
//       )}
      
//       <div className="fixed top-[14%] right-5 z-[99999] flex items-center gap-2 bg-[rgba(75,85,99,0.1)] text-[#4b5563] font-['Segoe_UI',sans-serif] text-xs font-bold py-1.5 px-3 border-[1.5px] border-[rgba(75,85,99,0.25)] rounded-full tracking-[0.5px] pointer-events-none select-none uppercase opacity-60">
//         <svg
//           width="14"
//           height="14"
//           viewBox="0 0 12 12"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M3 6l2 2 4-4"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//         Completed
//       </div>

//       <nav className="flex items-center justify-between w-full max-w-full mx-0 h-16 bg-[#003366] px-8 sticky top-0 z-[2000]">
//         <a
//           href="welcome.html"
//           id="navLogo"
//           className=" text-[22px] font-bold text-white leading-[1.2] no-underline flex items-baseline gap-3"
//         >
//           <span>OMS Portal</span>
//           <span className="text-[14px] font-normal text-white/70 leading-none">
//             Excellence in Examination Services
//           </span>
//         </a>
//       </nav>

//       <div className=" flex flex-col md:flex-row w-full min-h-[calc(100vh-64px)]">
//         {/* LEFT PANEL */}
//         <div className=" w-full md:w-[65%] bg-white relative flex flex-col min-h-[calc(100vh-64px)]">
//           <div className="px-5 md:px-[100px] py-5 md:py-20 flex-1 flex flex-col justify-start w-full">
//             <h1 className=" text-[34px] font-bold text-[#003366] font-source-sans mb-0.5">
//               Sign-Up as Observer
//             </h1>
//             <p className=" text-base text-[#888] font-roboto mb-5">
//               Create your observer account to access field assignments and
//               examinations.
//             </p>

//             <div
//               id="stepIndicator"
//               className="text-lg font-bold text-[#003366] mb-6"
//             >
//               Step {currentStep + 1} out of {STEPS.length}
//             </div>

//             {!showReview ? (
//               <form
//                 id="observerForm"
//                 className="accordion-form flex flex-col mb-6"
//                 onSubmit={handleSubmit}
//                 noValidate
//               >
//                 {/* Panel 1: Personal Details */}
//                 {currentStep === 0 && (
//                   <div className="panel-item active block border-none bg-transparent">
//                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
//                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
//                         Personal Details
//                       </span>
//                     </div>
//                     <div className="panel-body overflow-visible">
//                       <div className="panel-content p-0">
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               First Name
//                             </label>
//                             <input
//                               type="text"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
//                               placeholder="As per bank record"
//                               value={firstName}
//                               onChange={(e) => setFirstName(e.target.value)}
//                             />
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Last Name
//                             </label>
//                             <input
//                               type="text"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
//                               placeholder="As per bank record"
//                               value={lastName}
//                               onChange={(e) => setLastName(e.target.value)}
//                             />
//                           </div>
//                         </div>
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Email Address
//                             </label>
//                             {!emailVerified ? (
//                               <div className="input-group flex relative">
//                                 <input
//                                   type="email"
//                                   className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] border-r-0 rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter your email"
//                                   value={email}
//                                   onChange={(e) => setEmail(e.target.value)}
//                                 />
//                                 <button
//                                   type="button"
//                                   className="inline-btn h-11 px-[18px] bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
//                                   onClick={() =>
//                                     handleOpenOtpModal("email", email)
//                                   }
//                                 >
//                                   Send OTP
//                                 </button>
//                               </div>
//                             ) : (
//                               <div className="text-[#28a745] font-semibold flex items-center w-full h-11 border border-[#e2e8f0] rounded-md px-3 bg-[#f0fdf4]">
//                                 ✓ {email} is verified.
//                               </div>
//                             )}
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Date of Birth
//                             </label>
//                             <input
//                               type="date"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                               value={dob}
//                               onChange={(e) => setDob(e.target.value)}
//                             />
//                           </div>
//                         </div>
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Gender
//                             </label>
//                             <select
//                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                               value={gender}
//                               onChange={(e) => setGender(e.target.value)}
//                             >
//                               <option value="">Select Gender</option>
//                               <option value="male">Male</option>
//                               <option value="female">Female</option>
//                               <option value="other">Other</option>
//                             </select>
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Nationality
//                             </label>
//                             <select
//                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                               value={nationality}
//                               onChange={(e) => setNationality(e.target.value)}
//                             >
//                               <option value="">Select Nationality</option>
//                               <option value="indian">Indian</option>
//                               <option value="other">Other</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Mobile Number
//                             </label>
//                             {!phoneVerified ? (
//                               <div className="input-group flex relative">
//                                 <div className="flex items-center bg-[#f8fafc] border-[1.5px] border-[#e0e0e0] border-r-0 px-3 text-[13px] text-[#333] font-medium">
//                                   +91
//                                 </div>
//                                 <input
//                                   type="tel"
//                                   className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] border-l-0 px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter your mobile number"
//                                   maxLength={10}
//                                   value={phone}
//                                   onChange={(e) =>
//                                     setPhone(
//                                       e.target.value
//                                         .replace(/[^0-9]/g, "")
//                                         .slice(0, 10),
//                                     )
//                                   }
//                                 />
//                                 <button
//                                   type="button"
//                                   className="inline-btn h-11 px-[18px] bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
//                                   onClick={() =>
//                                     handleOpenOtpModal("mobile", phone)
//                                   }
//                                 >
//                                   Send OTP
//                                 </button>
//                               </div>
//                             ) : (
//                               <div className="text-[#28a745] font-semibold flex items-center w-full h-11 border border-[#e2e8f0] rounded-md px-3 bg-[#f0fdf4]">
//                                 ✓ {phone} is now verified.
//                               </div>
//                             )}
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block flex justify-between items-center">
//                               <span>Alternate Mobile Number</span>
//                             </label>
//                             <div className="input-group flex">
//                               <div className="flex items-center bg-[#f8fafc] border-[1.5px] border-[#e0e0e0] border-r-0 px-3 text-[13px] text-[#333] font-medium">
//                                 +91
//                               </div>
//                               <input
//                                 type="tel"
//                                 className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] border-l-0 border-r-[1.5px] px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                 placeholder="Enter alternate mobile number"
//                                 maxLength={10}
//                                 value={altPhone}
//                                 onChange={(e) =>
//                                   setAltPhone(
//                                     e.target.value
//                                       .replace(/[^0-9]/g, "")
//                                       .slice(0, 10),
//                                   )
//                                 }
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Panel 2: Verification & Banking Details */}
//                 {currentStep === 1 && (
//                   <div className="panel-item active block border-none bg-transparent">
//                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
//                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
//                         Verification &amp; Banking Details
//                       </span>
//                     </div>
//                     <div className="panel-body overflow-visible">
//                       <div className="panel-content p-0">
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Aadhar Number
//                             </label>
//                             {!aadharVerified ? (
//                               <div className="input-group flex relative">
//                                 <input
//                                   type="text"
//                                   className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="XXXX-XXXX-XXXX"
//                                   value={aadhar}
//                                   onChange={(e) => setAadhar(e.target.value)}
//                                 />
//                                 <button
//                                   type="button"
//                                   className="inline-btn h-11 px-[18px] bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
//                                   onClick={() =>
//                                     handleOpenOtpModal("aadhar", aadhar)
//                                   }
//                                 >
//                                   Get OTP
//                                 </button>
//                               </div>
//                             ) : (
//                               <div className="text-[#28a745] font-semibold flex items-center w-full h-11 border border-[#e2e8f0] rounded-md px-3 bg-[#f0fdf4]">
//                                 ✓ {aadhar} is verified.
//                               </div>
//                             )}
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               PAN Number
//                             </label>
//                             <input
//                               type="text"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
//                               placeholder="Enter PAN Number"
//                               value={pan}
//                               onChange={(e) => setPan(e.target.value)}
//                             />
//                           </div>
//                         </div>
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Bank Name
//                             </label>
//                             <select
//                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                               value={bankName}
//                               onChange={(e) => setBankName(e.target.value)}
//                             >
//                               <option value="">Select Bank</option>
//                               <option value="SBI">
//                                 State Bank of India (SBI)
//                               </option>
//                               <option value="HDFC">HDFC Bank</option>
//                               <option value="ICICI">ICICI Bank</option>
//                               <option value="Kotak">Kotak Mahindra Bank</option>
//                               <option value="Axis">Axis Bank</option>
//                               <option value="PNB">Punjab National Bank</option>
//                               <option value="Others">Others</option>
//                             </select>
//                             {bankName === "Others" && (
//                               <input
//                                 type="text"
//                                 className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white mt-2.5"
//                                 placeholder="Enter other bank name"
//                                 value={otherBankName}
//                                 onChange={(e) =>
//                                   setOtherBankName(e.target.value)
//                                 }
//                               />
//                             )}
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               IFSC Code
//                             </label>
//                             <input
//                               type="text"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
//                               placeholder="Enter IFSC code"
//                               value={ifscCode}
//                               onChange={(e) => setIfscCode(e.target.value)}
//                             />
//                           </div>
//                         </div>
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Branch Name
//                             </label>
//                             <input
//                               type="text"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-[#f8fafc] text-[#aaa] cursor-not-allowed"
//                               placeholder="Auto-filled from IFSC Code"
//                               value={branchName}
//                               readOnly
//                             />
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Account Number
//                             </label>
//                             <input
//                               type="text"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                               placeholder="Enter account number"
//                               value={accountNumber}
//                               onChange={(e) => setAccountNumber(e.target.value)}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Panel 3: Educational & Professional Details */}
//                 {currentStep === 2 && (
//                   <div className=" active block border-none bg-transparent">
//                     <div className=" mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
//                       <span className=" text-xl font-bold text-[#003366] font-source-sans">
//                         Educational &amp; Professional Details
//                       </span>
//                     </div>
//                     <div className=" overflow-visible">
//                       <div className=" p-0">
//                         <h3 className=" mt-0 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
//                           Educational Qualification
//                         </h3>
//                         <div className=" flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className=" flex-1">
//                             <label className=" text-base font-normal text-[#003366] mb-1.5 block">
//                               Highest Qualification
//                             </label>
//                             <select
//                               className=" w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                               value={highestQualification}
//                               onChange={(e) =>
//                                 setHighestQualification(e.target.value)
//                               }
//                             >
//                               <option value="">Select Qualification</option>
//                               <option value="Graduation">Graduation</option>
//                               <option value="Post-Graduation">
//                                 Post-Graduation
//                               </option>
//                               <option value="Doctorate">Doctorate</option>
//                             </select>
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Institute/ University Name
//                             </label>
//                             <input
//                               type="text"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                               placeholder="Enter Institute/ University Name"
//                               value={instituteUniversity}
//                               onChange={(e) =>
//                                 setInstituteUniversity(e.target.value)
//                               }
//                             />
//                           </div>
//                         </div>

//                         <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
//                           Professional / Employment Details
//                         </h3>
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col full flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Employment Status
//                             </label>
//                             <div className="radio-group flex gap-6 mt-2">
//                               <label className="radio-label flex items-center cursor-pointer font-roboto text-sm">
//                                 <input
//                                   type="radio"
//                                   name="employmentStatus"
//                                   value="working"
//                                   checked={employmentStatus === "working"}
//                                   onChange={() =>
//                                     setEmploymentStatus("working")
//                                   }
//                                   className="mr-2 w-4 h-4 accent-[#003366]"
//                                 />
//                                 <span className="radio-text text-[#1a2b4a]">
//                                   Working
//                                 </span>
//                               </label>
//                               <label className="radio-label flex items-center cursor-pointer font-roboto text-sm">
//                                 <input
//                                   type="radio"
//                                   name="employmentStatus"
//                                   value="retired"
//                                   checked={employmentStatus === "retired"}
//                                   onChange={() =>
//                                     setEmploymentStatus("retired")
//                                   }
//                                   className="mr-2 w-4 h-4 accent-[#003366]"
//                                 />
//                                 <span className="radio-text text-[#1a2b4a]">
//                                   Retired
//                                 </span>
//                               </label>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Working Fields */}
//                         {employmentStatus === "working" && (
//                           <div
//                             id="workingFields"
//                             className="employment-section mt-4"
//                           >
//                             {renderOrgTypeSelect(
//                               currOrgType,
//                               setCurrOrgType,
//                               currOrgSubType,
//                               setCurrOrgSubType,
//                               true,
//                             )}
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   Current Organisation Name
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter organisation name"
//                                   value={currOrgName}
//                                   onChange={(e) =>
//                                     setCurrOrgName(e.target.value)
//                                   }
//                                 />
//                               </div>
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   Post / Designation
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter designation"
//                                   value={currPost}
//                                   onChange={(e) => setCurrPost(e.target.value)}
//                                 />
//                               </div>
//                             </div>
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   From
//                                 </label>
//                                 <div className="date-input-group flex gap-3 w-full">
//                                   <select
//                                     className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                     value={currFromMonth}
//                                     onChange={(e) =>
//                                       setCurrFromMonth(e.target.value)
//                                     }
//                                   >
//                                     <option value="">Month</option>
//                                     <option value="01">Jan</option>
//                                     <option value="02">Feb</option>
//                                     <option value="03">Mar</option>
//                                     <option value="04">Apr</option>
//                                     <option value="05">May</option>
//                                     <option value="06">Jun</option>
//                                     <option value="07">Jul</option>
//                                     <option value="08">Aug</option>
//                                     <option value="09">Sep</option>
//                                     <option value="10">Oct</option>
//                                     <option value="11">Nov</option>
//                                     <option value="12">Dec</option>
//                                   </select>
//                                   <input
//                                     type="number"
//                                     className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                     placeholder="Year"
//                                     min="1950"
//                                     max="2026"
//                                     value={currFromYear}
//                                     onChange={(e) =>
//                                       setCurrFromYear(e.target.value)
//                                     }
//                                   />
//                                 </div>
//                               </div>
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   To
//                                 </label>
//                                 <div className="date-input-group flex gap-3 w-full">
//                                   <select
//                                     className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                     disabled
//                                   >
//                                     <option value="">Month</option>
//                                     <option value="Present">Present</option>
//                                   </select>
//                                   <input
//                                     type="text"
//                                     className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#94a3b8] bg-[#f8fafc] cursor-not-allowed"
//                                     value="Present"
//                                     disabled
//                                   />
//                                 </div>
//                               </div>
//                             </div>

                            
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col flex-1">
//                                 <div className="add-last-org-container flex items-center justify-between mt-2">
//                                   <span className="add-last-org-text text-base font-normal text-[#003366] font-source-sans">
//                                     Add last organisation (Optional)
//                                   </span>
//                                   <button
//                                     type="button"
//                                     className="add-plus-btn w-8 h-8 p-0 bg-[#f8fafc] text-[#003366] border-[1.5px] border-[#003366] rounded-full text-lg font-semibold font-source-sans cursor-pointer transition-all hover:bg-[#003366] hover:text-white hover:scale-105 flex items-center justify-center"
//                                     onClick={handleAddLastOrg}
//                                   >
//                                     +
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                             <div id="additionalOrgsContainer">
//                               {additionalOrgs.map((org, idx) => {
//                                 const data = additionalOrgsData.find(
//                                   (d) => d.id === org.id,
//                                 );
//                                 if (!data) return null;
//                                 const subTypes =
//                                   ORG_SUB_TYPES_MAP[data.orgType] || [];
//                                 return (
//                                   <div
//                                     key={org.id}
//                                     className="optional-section border-t border-dotted border-[#cbd5e1] pt-5 mt-5 relative"
//                                   >
//                                     <button
//                                       type="button"
//                                       className="remove-org-btn absolute top-1 right-0 text-[#ef4444] text-[13px] font-semibold underline bg-none border-none cursor-pointer hover:text-[#dc2626]"
//                                       onClick={() =>
//                                         handleRemoveLastOrg(org.id)
//                                       }
//                                     >
//                                       Remove
//                                     </button>
//                                     <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                                       <div className="form-col flex-1">
//                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                           Organization Type
//                                         </label>
//                                         <select
//                                           className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                           value={data.orgType}
//                                           onChange={(e) =>
//                                             updateAdditionalOrgData(
//                                               org.id,
//                                               "orgType",
//                                               e.target.value,
//                                             )
//                                           }
//                                         >
//                                           <option value="">Select Type</option>
//                                           <option value="Central Government">
//                                             Central Government
//                                           </option>
//                                           <option value="State Government">
//                                             State Government
//                                           </option>
//                                           <option value="Autonomous Body">
//                                             Autonomous Body
//                                           </option>
//                                           <option value="Institute / College / School">
//                                             Institute / College / School
//                                           </option>
//                                           <option value="University">
//                                             University
//                                           </option>
//                                           <option value="Public Sector">
//                                             Public Sector
//                                           </option>
//                                           <option value="Defence / Armed Forces">
//                                             Defence / Armed Forces
//                                           </option>
//                                         </select>
//                                       </div>
//                                       <div
//                                         className="form-col flex-1"
//                                         style={{
//                                           display:
//                                             subTypes.length > 0
//                                               ? "flex"
//                                               : "none",
//                                         }}
//                                       >
//                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                           Sub-Type
//                                         </label>
//                                         <select
//                                           className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                           value={data.orgSubType}
//                                           onChange={(e) =>
//                                             updateAdditionalOrgData(
//                                               org.id,
//                                               "orgSubType",
//                                               e.target.value,
//                                             )
//                                           }
//                                         >
//                                           <option value="">
//                                             Select Sub-Type
//                                           </option>
//                                           {subTypes.map((st) => (
//                                             <option key={st} value={st}>
//                                               {st}
//                                             </option>
//                                           ))}
//                                         </select>
//                                       </div>
//                                     </div>
//                                     <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                                       <div className="form-col flex-1">
//                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                           Last Organisation Name
//                                         </label>
//                                         <input
//                                           type="text"
//                                           className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                           placeholder="Enter last organisation name"
//                                           value={data.orgName}
//                                           onChange={(e) =>
//                                             updateAdditionalOrgData(
//                                               org.id,
//                                               "orgName",
//                                               e.target.value,
//                                             )
//                                           }
//                                         />
//                                       </div>
//                                       <div className="form-col flex-1">
//                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                           Post / Designation
//                                         </label>
//                                         <input
//                                           type="text"
//                                           className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                           placeholder="Enter designation"
//                                           value={data.post}
//                                           onChange={(e) =>
//                                             updateAdditionalOrgData(
//                                               org.id,
//                                               "post",
//                                               e.target.value,
//                                             )
//                                           }
//                                         />
//                                       </div>
//                                     </div>
//                                     <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                                       <div className="form-col flex-1">
//                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                           From
//                                         </label>
//                                         <div className="date-input-group flex gap-3 w-full">
//                                           <select
//                                             className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                             value={data.fromMonth}
//                                             onChange={(e) =>
//                                               updateAdditionalOrgData(
//                                                 org.id,
//                                                 "fromMonth",
//                                                 e.target.value,
//                                               )
//                                             }
//                                           >
//                                             <option value="">Month</option>
//                                             <option value="01">Jan</option>
//                                             <option value="02">Feb</option>
//                                             <option value="03">Mar</option>
//                                             <option value="04">Apr</option>
//                                             <option value="05">May</option>
//                                             <option value="06">Jun</option>
//                                             <option value="07">Jul</option>
//                                             <option value="08">Aug</option>
//                                             <option value="09">Sep</option>
//                                             <option value="10">Oct</option>
//                                             <option value="11">Nov</option>
//                                             <option value="12">Dec</option>
//                                           </select>
//                                           <input
//                                             type="number"
//                                             className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                             placeholder="Year"
//                                             min="1950"
//                                             max="2026"
//                                             value={data.fromYear}
//                                             onChange={(e) =>
//                                               updateAdditionalOrgData(
//                                                 org.id,
//                                                 "fromYear",
//                                                 e.target.value,
//                                               )
//                                             }
//                                           />
//                                         </div>
//                                       </div>
//                                       <div className="form-col flex-1">
//                                         <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                           To
//                                         </label>
//                                         <div className="date-input-group flex gap-3 w-full">
//                                           <select
//                                             className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                             value={data.toMonth}
//                                             onChange={(e) =>
//                                               updateAdditionalOrgData(
//                                                 org.id,
//                                                 "toMonth",
//                                                 e.target.value,
//                                               )
//                                             }
//                                           >
//                                             <option value="">Month</option>
//                                             <option value="01">Jan</option>
//                                             <option value="02">Feb</option>
//                                             <option value="03">Mar</option>
//                                             <option value="04">Apr</option>
//                                             <option value="05">May</option>
//                                             <option value="06">Jun</option>
//                                             <option value="07">Jul</option>
//                                             <option value="08">Aug</option>
//                                             <option value="09">Sep</option>
//                                             <option value="10">Oct</option>
//                                             <option value="11">Nov</option>
//                                             <option value="12">Dec</option>
//                                           </select>
//                                           <input
//                                             type="number"
//                                             className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                             placeholder="Year"
//                                             min="1950"
//                                             max="2026"
//                                             value={data.toYear}
//                                             onChange={(e) =>
//                                               updateAdditionalOrgData(
//                                                 org.id,
//                                                 "toYear",
//                                                 e.target.value,
//                                               )
//                                             }
//                                           />
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 );
//                               })}
//                             </div>
//                           </div>
//                         )}

//                         {/* Retired Fields */}
//                         {employmentStatus === "retired" && (
//                           <div
//                             id="retiredFields"
//                             className="employment-section mt-4"
//                           >
//                             {renderOrgTypeSelect(
//                               lastOrgType,
//                               setLastOrgType,
//                               lastOrgSubType,
//                               setLastOrgSubType,
//                               true,
//                             )}
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   Last Organisation Name
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter last organisation name"
//                                   value={lastOrgName}
//                                   onChange={(e) =>
//                                     setLastOrgName(e.target.value)
//                                   }
//                                 />
//                               </div>
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   Post / Designation
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter designation"
//                                   value={lastPost}
//                                   onChange={(e) => setLastPost(e.target.value)}
//                                 />
//                               </div>
//                             </div>
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   Date of Retirement
//                                 </label>
//                                 <input
//                                   type="date"
//                                   id="dateOfRetirement"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   value={dateOfRetirement}
//                                   onChange={(e) =>
//                                     setDateOfRetirement(e.target.value)
//                                   }
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Panel 4: Address Details */}
//                 {currentStep === 3 && (
//                   <div className="panel-item active block border-none bg-transparent">
//                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
//                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
//                         Address Details
//                       </span>
//                     </div>
//                     <div className="panel-body overflow-visible">
//                       <div className="panel-content p-0">
//                         <h3 className="form-subtitle mt-0 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
//                           Residential Address
//                         </h3>
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               State
//                             </label>
//                             <select
//                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                               value={resState}
//                               onChange={(e) => setResState(e.target.value)}
//                             >
//                               <option value="">Select State</option>
//                               <option value="Andhra Pradesh">
//                                 Andhra Pradesh
//                               </option>
//                               <option value="Bihar">Bihar</option>
//                               <option value="Delhi">Delhi</option>
//                               <option value="Gujarat">Gujarat</option>
//                               <option value="Karnataka">Karnataka</option>
//                               <option value="Maharashtra">Maharashtra</option>
//                               <option value="Tamil Nadu">Tamil Nadu</option>
//                               <option value="Uttar Pradesh">
//                                 Uttar Pradesh
//                               </option>
//                               <option value="West Bengal">West Bengal</option>
//                             </select>
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               City/ District
//                             </label>
//                             <select
//                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                               value={resCity}
//                               onChange={(e) => setResCity(e.target.value)}
//                             >
//                               <option value="">Select City/ District</option>
//                               {getCitiesForState(resState).map((city) => (
//                                 <option key={city} value={city}>
//                                   {city}
//                                 </option>
//                               ))}
//                             </select>
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               PIN Code
//                             </label>
//                             <input
//                               type="text"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                               placeholder="Enter PIN Code"
//                               maxLength={6}
//                               value={resPin}
//                               onChange={(e) =>
//                                 setResPin(e.target.value.replace(/[^0-9]/g, ""))
//                               }
//                             />
//                           </div>
//                         </div>
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col full flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Address Line 1
//                             </label>
//                             <input
//                               type="text"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                               placeholder="Enter Address Line 1"
//                               value={resAddr1}
//                               onChange={(e) => setResAddr1(e.target.value)}
//                             />
//                           </div>
//                         </div>
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col full flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Address Line 2
//                             </label>
//                             <input
//                               type="text"
//                               className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                               placeholder="Enter Address Line 2"
//                               value={resAddr2}
//                               onChange={(e) => setResAddr2(e.target.value)}
//                             />
//                           </div>
//                         </div>

//                         <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
//                           Select preferred work location
//                         </h3>
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Preferred State
//                             </label>
//                             <select
//                               className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                               value={prefState}
//                               onChange={(e) => setPrefState(e.target.value)}
//                             >
//                               <option value="">Select State</option>
//                               <option value="Andhra Pradesh">
//                                 Andhra Pradesh
//                               </option>
//                               <option value="Bihar">Bihar</option>
//                               <option value="Delhi">Delhi</option>
//                               <option value="Gujarat">Gujarat</option>
//                               <option value="Karnataka">Karnataka</option>
//                               <option value="Maharashtra">Maharashtra</option>
//                               <option value="Tamil Nadu">Tamil Nadu</option>
//                               <option value="Uttar Pradesh">
//                                 Uttar Pradesh
//                               </option>
//                               <option value="West Bengal">West Bengal</option>
//                             </select>
//                           </div>
//                         </div>
//                         {prefState && (
//                           <div id="citySelectionSection" className="mt-4">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Select up to 3 Cities
//                             </label>
//                             <CustomMultiSelect
//                               cities={getAvailableCities()}
//                               selectedCities={selectedCities}
//                               onToggleCity={handleToggleCity}
//                               maxSelect={3}
//                             />
//                             <p
//                               id="citySelectionMeta"
//                               className="text-[13px] text-[#6b7280] mt-2"
//                             >
//                               Selected: {selectedCities.length}/3
//                             </p>
//                           </div>
//                         )}

//                         {/* Current Organisation Address */}
//                         {employmentStatus === "working" && (
//                           <div id="currOrgAddressSection">
//                             <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
//                               Current Organisation Address
//                             </h3>
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   State
//                                 </label>
//                                 <select
//                                   className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                   value={currOrgState}
//                                   onChange={(e) =>
//                                     setCurrOrgState(e.target.value)
//                                   }
//                                 >
//                                   <option value="">Select State</option>
//                                   <option value="Andhra Pradesh">
//                                     Andhra Pradesh
//                                   </option>
//                                   <option value="Bihar">Bihar</option>
//                                   <option value="Delhi">Delhi</option>
//                                   <option value="Gujarat">Gujarat</option>
//                                   <option value="Karnataka">Karnataka</option>
//                                   <option value="Maharashtra">
//                                     Maharashtra
//                                   </option>
//                                   <option value="Tamil Nadu">Tamil Nadu</option>
//                                   <option value="Uttar Pradesh">
//                                     Uttar Pradesh
//                                   </option>
//                                   <option value="West Bengal">
//                                     West Bengal
//                                   </option>
//                                 </select>
//                               </div>
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   City/ District
//                                 </label>
//                                 <select
//                                   className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                   value={currOrgCity}
//                                   onChange={(e) =>
//                                     setCurrOrgCity(e.target.value)
//                                   }
//                                 >
//                                   <option value="">
//                                     Select City/ District
//                                   </option>
//                                   {getCitiesForState(currOrgState).map(
//                                     (city) => (
//                                       <option key={city} value={city}>
//                                         {city}
//                                       </option>
//                                     ),
//                                   )}
//                                 </select>
//                               </div>
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   PIN Code
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter PIN Code"
//                                   maxLength={6}
//                                   value={currOrgPin}
//                                   onChange={(e) =>
//                                     setCurrOrgPin(
//                                       e.target.value.replace(/[^0-9]/g, ""),
//                                     )
//                                   }
//                                 />
//                               </div>
//                             </div>
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col full flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   Address Line 1
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter Address Line 1"
//                                   value={currOrgAddr1}
//                                   onChange={(e) =>
//                                     setCurrOrgAddr1(e.target.value)
//                                   }
//                                 />
//                               </div>
//                             </div>
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col full flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   Address Line 2
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter Address Line 2"
//                                   value={currOrgAddr2}
//                                   onChange={(e) =>
//                                     setCurrOrgAddr2(e.target.value)
//                                   }
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         )}

//                         {/* Last Organisation Address */}
//                         {employmentStatus === "retired" && (
//                           <div id="lastOrgAddressSection">
//                             <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
//                               Last Organisation Address
//                             </h3>
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   State
//                                 </label>
//                                 <select
//                                   className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                   value={lastOrgState}
//                                   onChange={(e) =>
//                                     setLastOrgState(e.target.value)
//                                   }
//                                 >
//                                   <option value="">Select State</option>
//                                   <option value="Andhra Pradesh">
//                                     Andhra Pradesh
//                                   </option>
//                                   <option value="Bihar">Bihar</option>
//                                   <option value="Delhi">Delhi</option>
//                                   <option value="Gujarat">Gujarat</option>
//                                   <option value="Karnataka">Karnataka</option>
//                                   <option value="Maharashtra">
//                                     Maharashtra
//                                   </option>
//                                   <option value="Tamil Nadu">Tamil Nadu</option>
//                                   <option value="Uttar Pradesh">
//                                     Uttar Pradesh
//                                   </option>
//                                   <option value="West Bengal">
//                                     West Bengal
//                                   </option>
//                                 </select>
//                               </div>
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   City/ District
//                                 </label>
//                                 <select
//                                   className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                   value={lastOrgCity}
//                                   onChange={(e) =>
//                                     setLastOrgCity(e.target.value)
//                                   }
//                                 >
//                                   <option value="">
//                                     Select City/ District
//                                   </option>
//                                   {getCitiesForState(lastOrgState).map(
//                                     (city) => (
//                                       <option key={city} value={city}>
//                                         {city}
//                                       </option>
//                                     ),
//                                   )}
//                                 </select>
//                               </div>
//                               <div className="form-col flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   PIN Code
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter PIN Code"
//                                   maxLength={6}
//                                   value={lastOrgPin}
//                                   onChange={(e) =>
//                                     setLastOrgPin(
//                                       e.target.value.replace(/[^0-9]/g, ""),
//                                     )
//                                   }
//                                 />
//                               </div>
//                             </div>
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col full flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   Address Line 1
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter Address Line 1"
//                                   value={lastOrgAddr1}
//                                   onChange={(e) =>
//                                     setLastOrgAddr1(e.target.value)
//                                   }
//                                 />
//                               </div>
//                             </div>
//                             <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                               <div className="form-col full flex-1">
//                                 <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                   Address Line 2
//                                 </label>
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                   placeholder="Enter Address Line 2"
//                                   value={lastOrgAddr2}
//                                   onChange={(e) =>
//                                     setLastOrgAddr2(e.target.value)
//                                   }
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Panel 5: Upload Section */}
//                 {currentStep === 4 && (
//                   <div className="panel-item active block border-none bg-transparent">
//                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
//                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
//                         Upload Section
//                       </span>
//                     </div>
//                     <div className="panel-body overflow-visible">
//                       <div className="panel-content p-0">
//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col full flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Educational Document{" "}
//                               <span className="text-xs text-[#6b7280] font-normal ml-1">
//                                 (Max 1 MB)
//                               </span>
//                             </label>
//                             <div className="file-input-wrap relative w-full h-11">
//                               <input
//                                 type="text"
//                                 className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
//                                 placeholder="Upload Highest Qualification Document"
//                                 value={eduProofName}
//                                 readOnly
//                               />
//                               <svg
//                                 className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="1.5"
//                               >
//                                 <path d="M12 5v14M5 12l7-7 7 7" />
//                               </svg>
//                               <input
//                                 type="file"
//                                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                                 accept=".pdf,.jpg,.png"
//                                 onChange={(e) =>
//                                   handleFileChange(
//                                     e,
//                                     setEduProofFile,
//                                     setEduProofName,
//                                   )
//                                 }
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         {employmentStatus === "working" ? (
//                           <div
//                             className="form-row flex gap-6 mb-3 flex-col md:flex-row"
//                             id="uploadRowWorking"
//                           >
//                             <div className="form-col flex-1">
//                               <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                 Proof of Employment Type
//                               </label>
//                               <select
//                                 className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                 value={workingProofType}
//                                 onChange={(e) =>
//                                   setWorkingProofType(e.target.value)
//                                 }
//                               >
//                                 <option value="">Select Document Type</option>
//                                 <option value="ID card">ID card</option>
//                               </select>
//                             </div>
//                             <div className="form-col flex-1">
//                               <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                 Current Organisation Proof{" "}
//                                 <span className="text-xs text-[#6b7280] font-normal ml-1">
//                                   (Max 1 MB)
//                                 </span>
//                               </label>
//                               <div className="file-input-wrap relative w-full h-11">
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
//                                   placeholder="Upload Document"
//                                   value={empProofName}
//                                   readOnly
//                                 />
//                                 <svg
//                                   className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   strokeWidth="1.5"
//                                 >
//                                   <path d="M12 5v14M5 12l7-7 7 7" />
//                                 </svg>
//                                 <input
//                                   type="file"
//                                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                                   accept=".pdf,.jpg,.png"
//                                   onChange={(e) =>
//                                     handleFileChange(
//                                       e,
//                                       setEmpProofFile,
//                                       setEmpProofName,
//                                     )
//                                   }
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         ) : (
//                           <div
//                             className="form-row flex gap-6 mb-3 flex-col md:flex-row"
//                             id="uploadRowLastOrg"
//                           >
//                             <div className="form-col flex-1">
//                               <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                 Proof of Employment Type
//                               </label>
//                               <select
//                                 className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
//                                 value={lastOrgProofType}
//                                 onChange={(e) =>
//                                   setLastOrgProofType(e.target.value)
//                                 }
//                               >
//                                 <option value="">Select Document Type</option>
//                                 <option value="Service Certificate">
//                                   Service Certificate
//                                 </option>
//                                 <option value="PPO">PPO</option>
//                                 <option value="ID card">ID card</option>
//                               </select>
//                             </div>
//                             <div className="form-col flex-1">
//                               <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                                 Last Organisation Proof{" "}
//                                 <span className="text-xs text-[#6b7280] font-normal ml-1">
//                                   (Max 1 MB)
//                                 </span>
//                               </label>
//                               <div className="file-input-wrap relative w-full h-11">
//                                 <input
//                                   type="text"
//                                   className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
//                                   placeholder="Upload Document"
//                                   value={lastCertName}
//                                   readOnly
//                                 />
//                                 <svg
//                                   className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
//                                   viewBox="0 0 24 24"
//                                   fill="none"
//                                   stroke="currentColor"
//                                   strokeWidth="1.5"
//                                 >
//                                   <path d="M12 5v14M5 12l7-7 7 7" />
//                                 </svg>
//                                 <input
//                                   type="file"
//                                   className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                                   accept=".pdf,.jpg,.png"
//                                   onChange={(e) =>
//                                     handleFileChange(
//                                       e,
//                                       setLastCertFile,
//                                       setLastCertName,
//                                     )
//                                   }
//                                 />
//                               </div>
//                             </div>
//                           </div>
//                         )}

//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Aadhar Card{" "}
//                               <span className="text-xs text-[#6b7280] font-normal ml-1">
//                                 (Max 1 MB)
//                               </span>
//                             </label>
//                             <div className="file-input-wrap relative w-full h-11">
//                               <input
//                                 type="text"
//                                 className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
//                                 placeholder="Upload Document"
//                                 value={aadharUploadName}
//                                 readOnly
//                               />
//                               <svg
//                                 className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="1.5"
//                               >
//                                 <path d="M12 5v14M5 12l7-7 7 7" />
//                               </svg>
//                               <input
//                                 type="file"
//                                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                                 accept=".pdf,.jpg,.png"
//                                 onChange={(e) =>
//                                   handleFileChange(
//                                     e,
//                                     setAadharUploadFile,
//                                     setAadharUploadName,
//                                   )
//                                 }
//                               />
//                             </div>
//                           </div>
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               PAN Card{" "}
//                               <span className="text-xs text-[#6b7280] font-normal ml-1">
//                                 (Max 1 MB)
//                               </span>
//                             </label>
//                             <div className="file-input-wrap relative w-full h-11">
//                               <input
//                                 type="text"
//                                 className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
//                                 placeholder="Upload Document"
//                                 value={panUploadName}
//                                 readOnly
//                               />
//                               <svg
//                                 className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="1.5"
//                               >
//                                 <path d="M12 5v14M5 12l7-7 7 7" />
//                               </svg>
//                               <input
//                                 type="file"
//                                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                                 accept=".pdf,.jpg,.png"
//                                 onChange={(e) =>
//                                   handleFileChange(
//                                     e,
//                                     setPanUploadFile,
//                                     setPanUploadName,
//                                   )
//                                 }
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Cancelled Cheque / Passbook Copy{" "}
//                               <span className="text-xs text-[#6b7280] font-normal ml-1">
//                                 (Max 1 MB)
//                               </span>
//                             </label>
//                             <div className="file-input-wrap relative w-full h-11">
//                               <input
//                                 type="text"
//                                 className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
//                                 placeholder="Upload Document"
//                                 value={bankProofName}
//                                 readOnly
//                               />
//                               <svg
//                                 className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="1.5"
//                               >
//                                 <path d="M12 5v14M5 12l7-7 7 7" />
//                               </svg>
//                               <input
//                                 type="file"
//                                 className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                                 accept=".pdf,.jpg,.png"
//                                 onChange={(e) =>
//                                   handleFileChange(
//                                     e,
//                                     setBankProofFile,
//                                     setBankProofName,
//                                   )
//                                 }
//                               />
//                             </div>
//                           </div>
//                         </div>

//                         <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
//                           <div className="form-col full flex-1">
//                             <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
//                               Others{" "}
//                               <span className="text-xs text-[#6b7280] font-normal ml-1">
//                                 (Max 1 MB each)
//                               </span>
//                             </label>
//                             <div id="othersDocContainer">
//                               {othersDocs.map((doc, idx) => (
//                                 <div
//                                   key={doc.id}
//                                   className="others-doc-entry flex items-center gap-2.5 mb-2.5 flex-wrap"
//                                 >
//                                   <input
//                                     type="text"
//                                     className="field-input flex-1 min-w-[180px] h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
//                                     placeholder="Enter document name (e.g. Passport, NOC...)"
//                                     value={doc.name}
//                                     onChange={(e) =>
//                                       handleOthersDocNameChange(
//                                         doc.id,
//                                         e.target.value,
//                                       )
//                                     }
//                                   />
//                                   <div className=" flex-1 min-w-[200px] relative h-11">
//                                     <input
//                                       type="text"
//                                       className=" w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-[#f8fafc] cursor-not-allowed"
//                                       placeholder="Upload Document"
//                                       value={doc.fileName}
//                                       readOnly
//                                     />
//                                     <svg
//                                       className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
//                                       viewBox="0 0 24 24"
//                                       fill="none"
//                                       stroke="currentColor"
//                                       strokeWidth="1.5"
//                                     >
//                                       <path d="M12 5v14M5 12l7-7 7 7" />
//                                     </svg>
//                                     <input
//                                       type="file"
//                                       className="absolute inset-0 w-full h-full opacity-0 cursor-not-allowed"
//                                       accept=".pdf,.jpg,.png"
//                                       disabled={!doc.name}
//                                       onChange={(e) =>
//                                         handleOthersDocFileChange(
//                                           doc.id,
//                                           e.target.files?.[0] || null,
//                                           e.target.files?.[0]?.name || "",
//                                         )
//                                       }
//                                     />
//                                   </div>
//                                   {idx > 0 && (
//                                     <button
//                                       type="button"
//                                       className="others-remove-btn bg-none border-none text-[#c62828] text-lg cursor-pointer p-0 leading-none"
//                                       onClick={() =>
//                                         handleRemoveOthersDoc(doc.id)
//                                       }
//                                     >
//                                       ✕
//                                     </button>
//                                   )}
//                                 </div>
//                               ))}
//                             </div>
//                             <button
//                               type="button"
//                               id="addMoreOthersBtn"
//                               className="inline-btn hidden mt-2.5 w-auto py-1.5 px-[18px] text-[13px] bg-[#003366] text-white border-[1.5px] border-[#003366] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
//                               onClick={handleAddOthersDoc}
//                             >
//                               + Add More Document
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Panel 6: Live Selfie */}
//                 {currentStep === 5 && (
//                   <div className="panel-item active block border-none bg-transparent">
//                     <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
//                       <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
//                         Live Selfie Verification
//                       </span>
//                     </div>
//                     <div className="panel-body overflow-visible">
//                       <div className="panel-content min-h-[400px] flex flex-col items-center justify-center gap-6">
//                         <div
//                           id="camera-container"
//                           className="w-[280px] h-[280px] bg-[#f8fafc] border-2 border-dashed border-[#003366] rounded-full overflow-hidden flex justify-center items-center relative"
//                         >
//                           {!cameraActive && !selfieCaptured && (
//                             <svg
//                               id="camera-placeholder"
//                               className="w-16 h-16 text-[#cbd5e1]"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
//                               />
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
//                               />
//                             </svg>
//                           )}
//                           <video
//                             ref={videoRef}
//                             autoPlay
//                             playsInline
//                             className={`${cameraActive && !selfieCaptured ? "block" : "hidden"} w-full h-full object-cover absolute inset-0`}
//                           ></video>
//                           <canvas
//                             ref={canvasRef}
//                             className={`${selfieCaptured ? "block" : "hidden"} w-full h-full object-cover absolute inset-0`}
//                           ></canvas>
//                         </div>
//                         <div className="flex gap-4 items-center">
//                           {!cameraActive && !selfieCaptured && (
//                             <button
//                               type="button"
//                               className="create-btn w-[200px] h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
//                               onClick={handleStartCamera}
//                             >
//                               Open Camera
//                             </button>
//                           )}
//                           {cameraActive && !selfieCaptured && (
//                             <button
//                               type="button"
//                               className="create-btn w-[200px] h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
//                               onClick={handleCaptureSelfie}
//                             >
//                               Capture Selfie
//                             </button>
//                           )}
//                           {selfieCaptured && (
//                             <button
//                               type="button"
//                               className="inline-btn w-auto px-4 h-11 bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
//                               onClick={handleRetakeSelfie}
//                             >
//                               Retake Photo
//                             </button>
//                           )}
//                         </div>

//                         <div className="w-full border-t border-[#e2e8f0] mt-4 pt-4">
//                           <div className="tc-row flex items-center justify-start gap-2 mt-2">
//                             <input
//                               type="checkbox"
//                               className="tc-cb w-4 h-4 border-[1.5px] border-[#e0e0e0] cursor-pointer accent-[#003366]"
//                               id="tcCheck"
//                               checked={tcChecked}
//                               onChange={(e) => setTcChecked(e.target.checked)}
//                             />
//                             <label
//                               className="tc-text text-[13px] text-[#333] font-roboto"
//                               htmlFor="tcCheck"
//                             >
//                               I hereby declare that the information provided by
//                               me is true and correct to the best of my
//                               knowledge.
//                             </label>
//                           </div>
//                           <button
//                             type="submit"
//                             className="create-btn w-full h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors mt-6"
//                           >
//                             Create Account
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div className="text-right text-[#c62828] text-xs font-medium mt-2.5">
//                   All fields marked with * are mandatory.
//                 </div>
//                 <div className="next-arrow-container flex justify-center mt-7.5 mb-2.5">
//                   <button
//                     type="button"
//                     className="create-btn w-full h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors mt-6"   
//                     onClick={handleNextStep}
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Saving..." : "Save & Next"}
//                   </button>
//                 </div>

//                 <div className="login-row flex justify-center items-center gap-1.5 mt-3.5">
//                   <span className="text-[13px] text-[#333] font-roboto">
//                     Already have an account?
//                   </span>
//                   <a
//                     href="welcome.html"
//                     className="text-[13px] text-[#003366] font-bold underline font-source-sans"
//                   >
//                     Log in
//                   </a>
//                 </div>
//               </form>
//             ) : (
//               <div id="reviewSection" className="animate-[fadeIn_0.4s_ease]">
//                 <h2 className="form-title text-[34px] font-bold text-[#003366] font-source-sans mb-0.5">
//                   Review Your Details
//                 </h2>
//                 <p className="form-subtitle text-base text-[#888] font-roboto mb-5">
//                   Please verify your information before final submission.
//                 </p>
//                 <div
//                   id="reviewContent"
//                   className="bg-white p-6 rounded-md mb-6 border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
//                 >
//                   {renderReviewContent()}
//                 </div>
//                 <div className="flex gap-4 mt-6">
//                   <button
//                     type="button"
//                     className="inline-btn w-1/2 h-12 text-base bg-transparent text-[#666] border-1.5 border-[#003366] rounded-none font-bold font-source-sans cursor-pointer"
//                     onClick={handleEditReview}
//                   >
//                     Edit Details
//                   </button>
//                   <button
//                     type="button"
//                     className="create-btn w-1/2 h-12 text-base bg-[#003366] text-white border-none font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
//                     onClick={handleConfirmSubmit}
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Submitting..." : "Confirm & Submit"}
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="form-footer py-2.5 px-5 md:px-[100px] flex justify-center items-center flex-wrap gap-1">
//             <span className="footer-copy text-xs text-[#6b7280] font-source-sans">
//               © 2026 OMS (India) Limited. All rights reserved.
//             </span>
//             <span className="footer-links text-xs font-source-sans">
//               <a
//                 href="#"
//                 className="text-[#1a56db] no-underline hover:underline"
//               >
//                 Privacy Policy
//               </a>
//               <span className="sep mx-1.5 text-[#6b7280]">|</span>
//               <a
//                 href="#"
//                 className="text-[#1a56db] no-underline hover:underline"
//               >
//                 Terms of Use
//               </a>
//               <span className="sep mx-1.5 text-[#6b7280]">|</span>
//               <a
//                 href="#"
//                 className="text-[#1a56db] no-underline hover:underline"
//               >
//                 Help &amp; Support
//               </a>
//             </span>
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div
//           className="right-panel sticky top-9 self-start h-[calc(100vh-54px)] w-full md:w-[35%] bg-cover bg-right bg-no-repeat flex flex-col justify-end px-5 md:px-20 pb-10 text-white relative"
//           style={{ backgroundImage: "url('/building_bg.jpg')" }}
//         >
//           <div className="right-overlay absolute inset-0 bg-gradient-to-b from-[rgba(15,52,96,0.2)] to-[rgba(15,52,96,0.9)] z-0"></div>
//           <div className="right-content relative z-10 max-w-[500px]">
//             <div className="right-headline text-[40px] font-bold leading-tight mb-6 font-source-sans">
//               Driving Excellence in Examination Services across India.
//             </div>
//             <div className="right-desc text-base leading-relaxed opacity-90 mb-8 font-roboto">
//               Sign up as a observer to play a vital role in ensuring fair and
//               transparent examination processes across the country.
//             </div>
//             <div className="right-credit text-xs opacity-60">
//               Building Excellence by xyz
//             </div>
//           </div>
//         </div>
//       </div>

//       <OMSVersionFooter />

//       {/* OTP Modal */}
//       <OtpModal
//         isOpen={otpModalOpen}
//         title={
//           otpContext === "email"
//             ? "Verify Email Address"
//             : otpContext === "mobile"
//               ? "Verify Mobile Number"
//               : "Verify Aadhar Number"
//         }
//         description={`An OTP has been sent to ${otpTarget}.`}
//         onVerify={handleVerifyOtp}
//         onCancel={() => {
//           setOtpModalOpen(false);
//           setOtpContext(null);
//           setOtpTarget("");
//         }}
//       />

//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes spin {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//         .animate-spin {
//           animation: spin 1s linear infinite;
//         }
//         .field-label::after {
//           content: " *";
//           color: #cc3333;
//         }
//         input[type="email"].field-input,
//         #email.field-input {
//           text-transform: none;
//         }
//         .field-input::placeholder {
//           color: #aaa;
//           text-transform: none;
//         }
//       `}</style>
//     </>
//   );
// };

// export default SignupObserver;


import React, {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent,
} from "react";
import OMSVersionFooter from "../components/OMSVersionFooter";

// ---------- TYPE DEFINITIONS ----------
interface Step {
  id: string;
  title: string;
}

interface OrgSubTypeMap {
  [key: string]: string[];
}

interface IfscBranchMap {
  [key: string]: string;
}

interface AdditionalOrg {
  id: number;
  orgType?: string;
  orgSubType?: string;
  orgName?: string;
  post?: string;
  fromMonth?: string;
  fromYear?: string;
  toMonth?: string;
  toYear?: string;
}

interface OthersDocEntry {
  id: number;
  name: string;
  fileName: string;
  file: File | null;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    observer: {
      observer_id: number;
      registration_step: number;
      registration_status: string;
      is_draft: boolean;
      is_editing: boolean;
      [key: string]: any;
    };
    token?: string;
  };
}

interface Country {
  country_id: number;
  country_name: string;
  country_code: string;
  status: boolean;
}

interface State {
  state_id: number;
  country_id: number;
  state_name: string;
  state_code: string;
  status: boolean;
}

// ---------- CONSTANTS & MOCK DATA ----------
const API_BASE_URL = "http://192.168.14.220:3000/api";

const STEPS: Step[] = [
  { id: "panel-personal", title: "Personal Details" },
  { id: "panel-verification-banking", title: "Verification & Banking Details" },
  { id: "panel-professional", title: "Educational & Professional Details" },
  { id: "panel-address", title: "Address Details" },
  { id: "panel-documents", title: "Upload Section" },
  { id: "panel-selfie", title: "Live Selfie Verification" },
];

const ORG_SUB_TYPES_MAP: OrgSubTypeMap = {
  "Institute / College / School": ["Government", "Private"],
  University: ["Government", "Private"],
  "Public Sector": ["State", "Central"],
};

const IFSC_BRANCH_MAP: IfscBranchMap = {
  SBIN0001234: "SBI Connaught Place, New Delhi",
  SBIN0005936: "Sector-2",
  SBIN0002345: "SBI Bandra West, Mumbai",
  SBIN0003456: "SBI MG Road, Bangalore",
  SBIN0004567: "SBI Anna Salai, Chennai",
  SBIN0005678: "SBI Hazratganj, Lucknow",
  HDFC0001234: "HDFC Nariman Point, Mumbai",
  HDFC0002345: "HDFC Cyber City, Gurugram",
  HDFC0003456: "HDFC Koramangala, Bangalore",
  HDFC0004567: "HDFC Salt Lake, Kolkata",
  HDFC0005678: "HDFC Banjara Hills, Hyderabad",
  ICIC0001234: "ICICI Lower Parel, Mumbai",
  ICIC0002345: "ICICI Sector 17, Chandigarh",
  ICIC0003456: "ICICI Ashok Nagar, Chennai",
  ICIC0004567: "ICICI Civil Lines, Jaipur",
  ICIC0005678: "ICICI Gomti Nagar, Lucknow",
  KKBK0001234: "Kotak BKC, Mumbai",
  KKBK0002345: "Kotak Indiranagar, Bangalore",
  KKBK0003456: "Kotak Jubilee Hills, Hyderabad",
  UTIB0001234: "Axis Nehru Place, New Delhi",
  UTIB0002345: "Axis FC Road, Pune",
  UTIB0003456: "Axis Alwarpet, Chennai",
  PUNB0001234: "PNB Chandni Chowk, Delhi",
  PUNB0002345: "PNB Civil Lines, Allahabad",
  PUNB0003456: "PNB Station Road, Patna",
};

const updateFieldColor = (el: HTMLSelectElement | HTMLInputElement) => {
  if (el.value !== "") {
    el.style.color = "#1a2b4a";
  } else {
    el.style.color = "#aaa";
  }
};

// ---------- API SERVICE ----------
class ApiService {
  private static instance: ApiService;
  private authToken: string | null = null;

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  setAuthToken(token: string) {
    this.authToken = token;
    localStorage.setItem("authToken", token);
  }

  getAuthToken(): string | null {
    if (!this.authToken) {
      this.authToken = localStorage.getItem("authToken");
    }
    return this.authToken;
  }

  clearAuthToken() {
    this.authToken = null;
    localStorage.removeItem("authToken");
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const token = this.getAuthToken();
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `API Error: ${response.status}`);
    }

    return response.json();
  }

  private async uploadRequest<T>(
    endpoint: string,
    formData: FormData
  ): Promise<T> {
    const token = this.getAuthToken();
    const headers: HeadersInit = {};

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: "POST",
      headers,
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `Upload Error: ${response.status}`);
    }

    return response.json();
  }

  // Country & State APIs
  async getCountries(): Promise<Country[]> {
    const response = await this.request<{ success: boolean; data: Country[] }>(
      "/country",
      { method: "GET" }
    );
    return response.data;
  }

  async getStates(countryId: number): Promise<State[]> {
    const response = await this.request<{ success: boolean; data: State[] }>(
      `/state/country/${countryId}`,
      { method: "GET" }
    );
    return response.data;
  }

  // Step APIs
  async saveStep1(payload: any): Promise<ApiResponse> {
    console.log("payload on step 1", payload)
    const response = await this.request<ApiResponse>("/observer/step-1", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    if (response.data?.token) {
      this.setAuthToken(response.data.token);
    }
    return response;
  }

  async saveStep2(observerId: number, payload: any): Promise<ApiResponse> {
    console.log("payload on step 2", payload)
    return this.request<ApiResponse>(`/observer/step-2/${observerId}`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  async saveStep3(observerId: number, payload: any): Promise<ApiResponse> {
    console.log("payload on step 3", payload)
    return this.request<ApiResponse>(`/observer/step-3/${observerId}`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  async saveStep4(observerId: number, payload: any): Promise<ApiResponse> {
    console.log("payload on step 4", payload)
    return this.request<ApiResponse>(`/observer/step-4/${observerId}`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  async saveStep5(observerId: number, formData: FormData): Promise<ApiResponse> {
    console.log("payload on step 5", formData)
    return this.uploadRequest<ApiResponse>(
      `/observer/step-5/${observerId}`,
      formData
    );
  }

  async saveStep6(observerId: number, formData: FormData): Promise<ApiResponse> {
    console.log("payload on step 6", formData)
    return this.uploadRequest<ApiResponse>(
      `/observer/step-6/${observerId}`,
      formData
    );
  }

  async finalSubmit(observerId: number): Promise<ApiResponse> {
    console.log("payload on final submit", observerId)
    return this.request<ApiResponse>(`/observer/final-submit/${observerId}`, {
      method: "POST",
    });
  }
}

const apiService = ApiService.getInstance();

// ---------- CUSTOM HOOK FOR STEP MANAGEMENT ----------
const useStepManagement = () => {
  const [observerId, setObserverId] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleApiError = (error: any, stepName: string) => {
    console.error(`Error in ${stepName}:`, error);
    setError(error.message || `Failed to save ${stepName}`);
    setTimeout(() => setError(null), 5000);
    return false;
  };

  const savePersonalDetails = async (data: any): Promise<boolean> => {
    setIsSubmitting(true);
    try {
      const response = await apiService.saveStep1(data);
      if (response.success && response.data?.observer?.observer_id) {
        setObserverId(response.data.observer.observer_id);
        return true;
      }
      throw new Error(response.message || "Failed to save personal details");
    } catch (error) {
      return handleApiError(error, "Personal Details");
    } finally {
      setIsSubmitting(false);
    }
  };   

  const saveBankingDetails = async (data: any): Promise<boolean> => {
    if (!observerId) {
      setError("Observer ID not found. Please complete previous step first.");
      return false;
    }

    setIsSubmitting(true);
    try {
      const response = await apiService.saveStep2(observerId, data);
      return response.success;
    } catch (error) {
      return handleApiError(error, "Banking Details");
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveProfessionalDetails = async (data: any): Promise<boolean> => {
    if (!observerId) {
      setError("Observer ID not found. Please complete previous step first.");
      return false;
    }

    setIsSubmitting(true);
    try {
      const response = await apiService.saveStep3(observerId, data);
      return response.success;
    } catch (error) {
      return handleApiError(error, "Professional Details");
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveAddressDetails = async (data: any): Promise<boolean> => {
    if (!observerId) {
      setError("Observer ID not found. Please complete previous step first.");
      return false;
    }

    setIsSubmitting(true);
    try {
      const response = await apiService.saveStep4(observerId, data);
      return response.success;
    } catch (error) {
      return handleApiError(error, "Address Details");
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveDocuments = async (formData: FormData): Promise<boolean> => {
    if (!observerId) {
      setError("Observer ID not found. Please complete previous step first.");
      return false;
    }

    setIsSubmitting(true);
    try {
      const response = await apiService.saveStep5(observerId, formData);
      return response.success;
    } catch (error) {
      return handleApiError(error, "Documents Upload");
    } finally {
      setIsSubmitting(false);
    }
  };

  const saveSelfie = async (selfieFile: File): Promise<boolean> => {
    if (!observerId) {
      setError("Observer ID not found. Please complete previous step first.");
      return false;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("selfie_image", selfieFile);
      const response = await apiService.saveStep6(observerId, formData);
      return response.success;
    } catch (error) {
      return handleApiError(error, "Selfie Upload");
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitFinal = async (): Promise<boolean> => {
    if (!observerId) {
      setError("Observer ID not found. Please complete previous step first.");
      return false;
    }

    setIsSubmitting(true);
    try {
      const response = await apiService.finalSubmit(observerId);
      return response.success;
    } catch (error) {
      return handleApiError(error, "Final Submission");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    observerId,
    isSubmitting,
    error,
    savePersonalDetails,
    saveBankingDetails,
    saveProfessionalDetails,
    saveAddressDetails,
    saveDocuments,
    saveSelfie,
    submitFinal,
  };
};

// ---------- CUSTOM MULTI SELECT COMPONENT ----------
interface CustomMultiSelectProps {
  cities: string[];
  selectedCities: string[];
  onToggleCity: (city: string) => void;
  maxSelect?: number;
}

const CustomMultiSelect: React.FC<CustomMultiSelectProps> = ({
  cities,
  selectedCities,
  onToggleCity,
  maxSelect = 3,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const removeCity = (city: string) => {
    onToggleCity(city);
  };

  return (
    <div className="custom-multi-select relative w-full" ref={containerRef}>
      <div
        className={`cms-header min-h-[44px] border-[1.5px] border-[#e0e0e0] bg-white flex items-center justify-between px-[14px] py-1 cursor-pointer transition-colors ${
          isOpen ? "border-[#003366] rounded-t-none" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="cms-tags flex flex-wrap gap-1.5 flex-1 items-center min-h-[32px]">
          {selectedCities.length === 0 ? (
            <span className="cms-placeholder text-[#aaa] text-[13px]">
              Select up to {maxSelect} cities
            </span>
          ) : (
            selectedCities.map((city) => (
              <div
                key={city}
                className="cms-tag bg-[#003366] text-white px-2 py-1 rounded text-[13px] flex items-center gap-1.5 font-medium"
              >
                {city}
                <i
                  className="not-italic text-base leading-[0.8] cursor-pointer hover:text-[#f87171]"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeCity(city);
                  }}
                >
                  ×
                </i>
              </div>
            ))
          )}
        </div>
        <div className="cms-arrow text-[#94a3b8] text-xs ml-2">▼</div>
      </div>
      {isOpen && (
        <div className="cms-dropdown absolute top-full left-0 w-full bg-white border-[1.5px] border-[#003366] border-t-0 shadow-lg z-10 flex flex-col">
          <div className="cms-search p-2 border-b border-[#f1f5f9]">
            <input
              type="text"
              className="field-input h-9 px-2.5 rounded text-[13px] border border-[#e2e8f0] w-full focus:border-[#003366] focus:outline-none"
              placeholder="Search city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="cms-options max-h-[200px] overflow-y-auto py-1">
            {filteredCities.length === 0 ? (
              <div className="px-3 py-3 text-[#94a3b8] text-[13px] text-center">
                No cities found
              </div>
            ) : (
              filteredCities.map((city) => {
                const isSelected = selectedCities.includes(city);
                const isDisabled =
                  !isSelected && selectedCities.length >= maxSelect;
                return (
                  <div
                    key={city}
                    className={`cms-option px-3 py-2 flex items-center gap-2.5 cursor-pointer text-sm text-[#475569] hover:bg-[#f8fafc] hover:text-[#003366] ${
                      isDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    onClick={() => !isDisabled && onToggleCity(city)}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      readOnly
                      tabIndex={-1}
                      className="w-4 h-4 accent-[#003366]"
                    />
                    <span>{city}</span>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// ---------- OTP MODAL COMPONENT ----------
interface OtpModalProps {
  isOpen: boolean;
  title: string;
  description: string;
  onVerify: (otp: string) => void;
  onCancel: () => void;
}

const OtpModal: React.FC<OtpModalProps> = ({
  isOpen,
  title,
  description,
  onVerify,
  onCancel,
}) => {
  const [otp, setOtp] = useState<string>("");

  if (!isOpen) return null;

  const handleVerify = () => {
    if (otp.trim()) {
      onVerify(otp);
      setOtp("");
    } else {
      alert("Please enter the OTP.");
    }
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center">
      <div className="modal-dialog bg-white w-[400px] max-w-[90%] rounded-lg p-6 shadow-lg">
        <h3 className="modal-title text-xl text-[#003366] font-source-sans font-bold mb-2">
          {title}
        </h3>
        <p className="modal-desc text-sm text-[#666] mb-5 font-roboto">
          {description}
        </p>
        <div className="modal-body">
          <input
            type="text"
            className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white mb-4"
            placeholder="Enter OTP (XXXX)"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            type="button"
            className="create-btn w-full h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
            onClick={handleVerify}
          >
            Verify
          </button>
          <button
            type="button"
            className="inline-btn w-full bg-transparent text-[#666] border-none mt-2 text-sm font-roboto cursor-pointer"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// ---------- LOADING OVERLAY COMPONENT ----------
const LoadingOverlay: React.FC<{ message?: string }> = ({
  message = "Saving...",
}) => (
  <div className="fixed inset-0 bg-black/50 z-[10000] flex items-center justify-center">
    <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-[#003366] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-[#003366] font-semibold">{message}</p>
    </div>
  </div>
);

// ---------- MAIN COMPONENT ----------
const SignupObserver: React.FC = () => {
  // ----- Country & State Data -----
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities] = useState<string[]>([
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Patna",
    "Vadodara",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Ranchi",
    "Meerut",
    "Rajkot",
    "Varanasi",
  ]);

  // ----- Form State -----
  // Personal Details
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailVerified, setEmailVerified] = useState<boolean>(false);
  const [dob, setDob] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [phoneVerified, setPhoneVerified] = useState<boolean>(false);
  const [altPhone, setAltPhone] = useState<string>("");

  // Verification & Banking
  const [aadhar, setAadhar] = useState<string>("");
  const [aadharVerified, setAadharVerified] = useState<boolean>(false);
  const [pan, setPan] = useState<string>("");
  const [bankName, setBankName] = useState<string>("");
  const [otherBankName, setOtherBankName] = useState<string>("");
  const [ifscCode, setIfscCode] = useState<string>("");
  const [branchName, setBranchName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");

  // Educational & Professional
  const [highestQualification, setHighestQualification] = useState<string>("");
  const [instituteUniversity, setInstituteUniversity] = useState<string>("");
  const [employmentStatus, setEmploymentStatus] = useState<
    "working" | "retired"
  >("working");
  // Working fields
  const [currOrgType, setCurrOrgType] = useState<string>("");
  const [currOrgSubType, setCurrOrgSubType] = useState<string>("");
  const [currOrgName, setCurrOrgName] = useState<string>("");
  const [currPost, setCurrPost] = useState<string>("");
  const [currFromMonth, setCurrFromMonth] = useState<string>("");
  const [currFromYear, setCurrFromYear] = useState<string>("");
  // Retired fields
  const [lastOrgType, setLastOrgType] = useState<string>("");
  const [lastOrgSubType, setLastOrgSubType] = useState<string>("");
  const [lastOrgName, setLastOrgName] = useState<string>("");
  const [lastPost, setLastPost] = useState<string>("");
  const [dateOfRetirement, setDateOfRetirement] = useState<string>("");
  // Additional Organisations
  const [additionalOrgs, setAdditionalOrgs] = useState<AdditionalOrg[]>([]);

  // Address Details
  const [resCountry, setResCountry] = useState<string>("");
  const [resState, setResState] = useState<string>("");
  const [resCity, setResCity] = useState<string>("");
  const [resPin, setResPin] = useState<string>("");
  const [resAddr1, setResAddr1] = useState<string>("");
  const [resAddr2, setResAddr2] = useState<string>("");
  const [prefState, setPrefState] = useState<string>("");
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [currOrgCountry, setCurrOrgCountry] = useState<string>("");
  const [currOrgState, setCurrOrgState] = useState<string>("");
  const [currOrgCity, setCurrOrgCity] = useState<string>("");
  const [currOrgPin, setCurrOrgPin] = useState<string>("");
  const [currOrgAddr1, setCurrOrgAddr1] = useState<string>("");
  const [currOrgAddr2, setCurrOrgAddr2] = useState<string>("");
  const [lastOrgCountry, setLastOrgCountry] = useState<string>("");
  const [lastOrgState, setLastOrgState] = useState<string>("");
  const [lastOrgCity, setLastOrgCity] = useState<string>("");
  const [lastOrgPin, setLastOrgPin] = useState<string>("");
  const [lastOrgAddr1, setLastOrgAddr1] = useState<string>("");
  const [lastOrgAddr2, setLastOrgAddr2] = useState<string>("");

  // Upload Section
  const [eduProofFile, setEduProofFile] = useState<File | null>(null);
  const [eduProofName, setEduProofName] = useState<string>("");
  const [workingProofType, setWorkingProofType] = useState<string>("");
  const [empProofFile, setEmpProofFile] = useState<File | null>(null);
  const [empProofName, setEmpProofName] = useState<string>("");
  const [lastOrgProofType, setLastOrgProofType] = useState<string>("");
  const [lastCertFile, setLastCertFile] = useState<File | null>(null);
  const [lastCertName, setLastCertName] = useState<string>("");
  const [aadharUploadFile, setAadharUploadFile] = useState<File | null>(null);
  const [aadharUploadName, setAadharUploadName] = useState<string>("");
  const [panUploadFile, setPanUploadFile] = useState<File | null>(null);
  const [panUploadName, setPanUploadName] = useState<string>("");
  const [bankProofFile, setBankProofFile] = useState<File | null>(null);
  const [bankProofName, setBankProofName] = useState<string>("");
  const [othersDocs, setOthersDocs] = useState<OthersDocEntry[]>([
    { id: Date.now(), name: "", fileName: "", file: null },
  ]);

  // Selfie
  const [selfieCaptured, setSelfieCaptured] = useState<boolean>(false);
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [selfieFile, setSelfieFile] = useState<File | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cameraStreamRef = useRef<MediaStream | null>(null);

  // UI State
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showReview, setShowReview] = useState<boolean>(false);
  const [tcChecked, setTcChecked] = useState<boolean>(true);

  // OTP Modal State
  const [otpModalOpen, setOtpModalOpen] = useState<boolean>(false);
  const [otpContext, setOtpContext] = useState<
    "email" | "mobile" | "aadhar" | null
  >(null);
  const [otpTarget, setOtpTarget] = useState<string>("");

  // Step Management Hook
  const {
    observerId,
    isSubmitting,
    error: apiError,
    savePersonalDetails,
    saveBankingDetails,
    saveProfessionalDetails,
    saveAddressDetails,
    saveDocuments,
    saveSelfie,
    submitFinal,
  } = useStepManagement();

  // ----- Effects -----
  // Load countries on mount
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const countriesData = await apiService.getCountries();
        setCountries(countriesData);
        // Set India as default if available
        const india = countriesData.find(
          (c) => c.country_name === "India" || c.country_code === "IND"
        );
        if (india) {
          setResCountry(india.country_id.toString());
          setCurrOrgCountry(india.country_id.toString());
          setLastOrgCountry(india.country_id.toString());
          // Load states for India
          const statesData = await apiService.getStates(india.country_id);
          setStates(statesData);
        }
      } catch (error) {
        console.error("Error loading countries:", error);
      }
    };
    loadCountries();
  }, []);

  // Load states when country changes for Residential
  useEffect(() => {
    if (resCountry) {
      apiService.getStates(parseInt(resCountry)).then(setStates).catch(console.error);
    }
  }, [resCountry]);

  // Load states when country changes for Current Organisation
  useEffect(() => {
    if (currOrgCountry) {
      apiService.getStates(parseInt(currOrgCountry)).then(setStates).catch(console.error);
    }
  }, [currOrgCountry]);

  // Load states when country changes for Last Organisation
  useEffect(() => {
    if (lastOrgCountry) {
      apiService.getStates(parseInt(lastOrgCountry)).then(setStates).catch(console.error);
    }
  }, [lastOrgCountry]);

  // IFSC lookup effect
  useEffect(() => {
    if (!ifscCode) {
      setBranchName("");
      return;
    }
    const code = ifscCode.trim().toUpperCase();
    const branch = IFSC_BRANCH_MAP[code];
    if (branch) {
      setBranchName(branch);
    } else {
      setBranchName("");
    }
  }, [ifscCode]);

  // Disable future date for retirement
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const retirementInput = document.getElementById(
      "dateOfRetirement"
    ) as HTMLInputElement;
    if (retirementInput) {
      retirementInput.setAttribute("max", today);
    }
  }, []);

  // Update select colors
  useEffect(() => {
    const selects = document.querySelectorAll('select, input[type="date"]');
    selects.forEach((el) => {
      if (el instanceof HTMLSelectElement || el instanceof HTMLInputElement) {
        updateFieldColor(el);
        el.addEventListener("change", () => updateFieldColor(el));
      }
    });
  }, [currentStep]);

  // ----- Handlers -----
  const handleNextStep = async () => {
    let success = true;

    // Save current step data before proceeding
    switch (currentStep) {
      case 0: // Personal Details
        const personalData = {
          first_name: firstName,
          last_name: lastName,
          email_address: email,
          date_of_birth: dob,
          gender: gender.charAt(0).toUpperCase() + gender.slice(1),
          nationality: nationality.charAt(0).toUpperCase() + nationality.slice(1),
          mobile_number: phone,
          alternate_mobile_number: altPhone || null,
          is_editing: false,
        };
        success = await savePersonalDetails(personalData);
        break;
      case 1: // Banking Details
        const bankingData = {
          aadhar_number: aadhar,
          pan_number: pan || null,
          bank_name: bankName === "Others" ? otherBankName : bankName,
          ifsc_code: ifscCode || null,
          branch_name: branchName || null,
          account_number: accountNumber || null,
          is_editing: false,
        };
        success = await saveBankingDetails(bankingData);
        break;
      case 2: // Professional Details
        const professionalData = {
          highest_qualification: highestQualification,
          institute_university_name: instituteUniversity,
          employment_status: employmentStatus === "working" ? "WORKING" : "RETIRED",
          organization_type: employmentStatus === "working" ? currOrgType : lastOrgType,
          last_organisation_name: employmentStatus === "working" ? currOrgName : lastOrgName,
          post_designation: employmentStatus === "working" ? currPost : lastPost,
          date_of_retirement: employmentStatus === "retired" ? dateOfRetirement : null,
          is_editing: false,
        };
        success = await saveProfessionalDetails(professionalData);
        break;
      case 3: // Address Details
        const addressData = {
          residential_country: resCountry,
          residential_state: resState,
          residential_city_district: resCity,
          residential_pin_code: resPin,
          residential_address_line1: resAddr1,
          residential_address_line2: resAddr2 || "",
          preferred_state: prefState || null,
          org_country: employmentStatus === "working" ? currOrgCountry : lastOrgCountry,
          org_state: employmentStatus === "working" ? currOrgState : lastOrgState,
          org_city_district: employmentStatus === "working" ? currOrgCity : lastOrgCity,
          org_pin_code: employmentStatus === "working" ? currOrgPin : lastOrgPin,
          org_address_line1: employmentStatus === "working" ? currOrgAddr1 : lastOrgAddr1,
          org_address_line2: employmentStatus === "working" ? currOrgAddr2 || "" : lastOrgAddr2 || "",
          is_editing: false,
        };
        success = await saveAddressDetails(addressData);
        break;
      case 4: // Documents
        const formData = new FormData();
        if (eduProofFile) formData.append("educational_document", eduProofFile);
        if (aadharUploadFile) formData.append("aadhar_card", aadharUploadFile);
        if (panUploadFile) formData.append("pan_card", panUploadFile);
        if (bankProofFile) formData.append("cancelled_cheque_or_passbook", bankProofFile);
        if (employmentStatus === "working" && empProofFile) {
          formData.append("employment_proof", empProofFile);
        }
        if (employmentStatus === "retired" && lastCertFile) {
          formData.append("last_organisation_proof", lastCertFile);
        }
        othersDocs.forEach((doc, index) => {
          if (doc.file && doc.name) {
            formData.append(`other_documents[${index}][name]`, doc.name);
            formData.append(`other_documents[${index}][file]`, doc.file);
          }
        });
        formData.append("is_editing", "false");
        success = await saveDocuments(formData);
        break;
    }

    if (success && currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.history.pushState({ step: currentStep + 1 }, "", "");
      document.querySelector(".form-area")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    setName: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFile(file);
      setName(file.name);
    } else {
      setFile(null);
      setName("");
    }
  };

  const handleAddOthersDoc = () => {
    setOthersDocs([
      ...othersDocs,
      { id: Date.now(), name: "", fileName: "", file: null },
    ]);
  };

  const handleRemoveOthersDoc = (id: number) => {
    setOthersDocs(othersDocs.filter((doc) => doc.id !== id));
  };

  const handleOthersDocNameChange = (id: number, name: string) => {
    setOthersDocs(
      othersDocs.map((doc) => (doc.id === id ? { ...doc, name } : doc))
    );
  };

  const handleOthersDocFileChange = (
    id: number,
    file: File | null,
    fileName: string
  ) => {
    setOthersDocs(
      othersDocs.map((doc) =>
        doc.id === id ? { ...doc, file, fileName } : doc
      )
    );
  };

  const handleAddLastOrg = () => {
    const newId = Date.now();
    setAdditionalOrgs([
      ...additionalOrgs,
      {
        id: newId,
        orgType: "",
        orgSubType: "",
        orgName: "",
        post: "",
        fromMonth: "",
        fromYear: "",
        toMonth: "",
        toYear: "",
      },
    ]);
  };

  const handleRemoveLastOrg = (id: number) => {
    setAdditionalOrgs(additionalOrgs.filter((org) => org.id !== id));
  };

  const updateAdditionalOrgData = (id: number, field: string, value: string) => {
    setAdditionalOrgs(
      additionalOrgs.map((org) =>
        org.id === id ? { ...org, [field]: value } : org
      )
    );
  };

  const handleToggleCity = (city: string) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(selectedCities.filter((c) => c !== city));
    } else if (selectedCities.length < 3) {
      setSelectedCities([...selectedCities, city]);
    }
  };

  const handleOpenOtpModal = (
    context: "email" | "mobile" | "aadhar",
    target: string
  ) => {
    if (!target) {
      alert(`Please enter your ${context} first.`);
      return;
    }
    setOtpContext(context);
    setOtpTarget(target);
    setOtpModalOpen(true);
  };

  const handleVerifyOtp = (otp: string) => {
    if (otpContext === "email") {
      setEmailVerified(true);
    } else if (otpContext === "mobile") {
      setPhoneVerified(true);
    } else if (otpContext === "aadhar") {
      setAadharVerified(true);
    }
    setOtpModalOpen(false);
    setOtpContext(null);
    setOtpTarget("");
  };

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      cameraStreamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.style.display = "block";
        setCameraActive(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert(
        "Could not access the camera. Please ensure you have granted permission."
      );
    }
  };

  const handleCaptureSelfie = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert canvas to file
      canvas.toBlob(
        (blob) => {
          if (blob) {
            const file = new File([blob], "selfie.jpg", { type: "image/jpeg" });
            setSelfieFile(file);
          }
        },
        "image/jpeg",
        0.9
      );

      video.style.display = "none";
      canvas.style.display = "block";
      setCameraActive(false);
      setSelfieCaptured(true);
      if (cameraStreamRef.current) {
        cameraStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    }
  };

  const handleRetakeSelfie = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      cameraStreamRef.current = stream;
      if (videoRef.current && canvasRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.style.display = "block";
        canvasRef.current.style.display = "none";
        setCameraActive(true);
        setSelfieCaptured(false);
        setSelfieFile(null);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!tcChecked) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    // Save selfie first
    if (selfieFile) {
      const selfieSaved = await saveSelfie(selfieFile);
      if (!selfieSaved) {
        alert("Failed to save selfie. Please try again.");
        return;
      }
    }

    setShowReview(true);
    document.querySelector(".form-area")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleEditReview = () => {
    setShowReview(false);
    document.querySelector(".form-area")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleConfirmSubmit = async () => {
    const success = await submitFinal();
    if (success) {
      window.location.href = "signup-confirmation.html";
    } else {
      alert("Failed to submit registration. Please try again.");
    }
  };

  // Helper to get country name by ID
  const getCountryName = (countryId: string): string => {
    const country = countries.find((c) => c.country_id.toString() === countryId);
    return country ? country.country_name : countryId;
  };

  // Helper to get state name by ID
  const getStateName = (stateId: string): string => {
    const state = states.find((s) => s.state_id.toString() === stateId);
    return state ? state.state_name : stateId;
  };

  // ----- Render Helpers -----
  const renderReviewContent = () => {
    const sections = [
      {
        title: "Personal Details",
        data: [
          { label: "First Name", value: firstName },
          { label: "Last Name", value: lastName },
          { label: "Email Address", value: emailVerified ? email : "Not verified" },
          { label: "Date of Birth", value: dob },
          { label: "Gender", value: gender },
          { label: "Nationality", value: nationality },
          { label: "Mobile Number", value: phoneVerified ? phone : "Not verified" },
          { label: "Alternate Mobile Number", value: altPhone || "-" },
        ],
      },
      {
        title: "Verification & Banking Details",
        data: [
          { label: "Aadhar Number", value: aadharVerified ? aadhar : "Not verified" },
          { label: "PAN Number", value: pan || "-" },
          { label: "Bank Name", value: bankName === "Others" ? otherBankName : bankName },
          { label: "IFSC Code", value: ifscCode || "-" },
          { label: "Branch Name", value: branchName || "-" },
          { label: "Account Number", value: accountNumber || "-" },
        ],
      },
      {
        title: "Educational & Professional Details",
        data: [
          { label: "Highest Qualification", value: highestQualification },
          { label: "Institute/University", value: instituteUniversity },
          {
            label: "Employment Status",
            value: employmentStatus === "working" ? "Working" : "Retired",
          },
          ...(employmentStatus === "working"
            ? [
                { label: "Current Organisation Type", value: currOrgType },
                { label: "Current Organisation Sub-Type", value: currOrgSubType },
                { label: "Current Organisation Name", value: currOrgName },
                { label: "Post/Designation", value: currPost },
                { label: "From Date", value: `${currFromMonth}/${currFromYear}` },
              ]
            : [
                { label: "Last Organisation Type", value: lastOrgType },
                { label: "Last Organisation Sub-Type", value: lastOrgSubType },
                { label: "Last Organisation Name", value: lastOrgName },
                { label: "Post/Designation", value: lastPost },
                { label: "Date of Retirement", value: dateOfRetirement },
              ]),
        ],
      },
      {
        title: "Address Details",
        data: [
          { label: "Residential Country", value: getCountryName(resCountry) },
          { label: "Residential State", value: getStateName(resState) },
          { label: "Residential City/District", value: resCity },
          { label: "Residential PIN", value: resPin },
          { label: "Residential Address Line 1", value: resAddr1 },
          { label: "Residential Address Line 2", value: resAddr2 || "-" },
          { label: "Preferred State", value: prefState ? getStateName(prefState) : "-" },
          {
            label: "Preferred Cities",
            value: selectedCities.length > 0 ? selectedCities.join(", ") : "-",
          },
          ...(employmentStatus === "working"
            ? [
                { label: "Current Organisation Country", value: getCountryName(currOrgCountry) },
                { label: "Current Organisation State", value: getStateName(currOrgState) },
                { label: "Current Organisation City", value: currOrgCity },
                { label: "Current Organisation PIN", value: currOrgPin },
                { label: "Current Organisation Address", value: currOrgAddr1 },
              ]
            : [
                { label: "Last Organisation Country", value: getCountryName(lastOrgCountry) },
                { label: "Last Organisation State", value: getStateName(lastOrgState) },
                { label: "Last Organisation City", value: lastOrgCity },
                { label: "Last Organisation PIN", value: lastOrgPin },
                { label: "Last Organisation Address", value: lastOrgAddr1 },
              ]),
        ],
      },
      {
        title: "Upload Section",
        data: [
          { label: "Educational Document", value: eduProofName || "-" },
          ...(employmentStatus === "working"
            ? [
                { label: "Current Organisation Proof Type", value: workingProofType || "-" },
                { label: "Current Organisation Proof", value: empProofName || "-" },
              ]
            : [
                { label: "Last Organisation Proof Type", value: lastOrgProofType || "-" },
                { label: "Last Organisation Proof", value: lastCertName || "-" },
              ]),
          { label: "Aadhar Card Upload", value: aadharUploadName || "-" },
          { label: "PAN Card Upload", value: panUploadName || "-" },
          { label: "Cancelled Cheque/Passbook", value: bankProofName || "-" },
          ...othersDocs
            .filter((doc) => doc.fileName)
            .map((doc) => ({
              label: doc.name || "Other Document",
              value: doc.fileName,
            })),
        ],
      },
    ];

    return (
      <div className="flex flex-col gap-6">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h4 className="m-0 mb-4 text-[#003366] text-base border-b-2 border-[#e2e8f0] pb-2 font-semibold">
              {section.title}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.data.map((item, i) =>
                item.value &&
                item.value !== "-" &&
                item.value !== "Not verified" ? (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-[13px] text-[#64748b] font-medium">
                      {item.label}
                    </span>
                    <span className="text-sm text-[#0f172a] font-semibold break-words">
                      {item.value}
                    </span>
                  </div>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderOrgTypeSelect = (
    value: string,
    onChange: (val: string) => void,
    subTypeValue: string,
    onSubTypeChange: (val: string) => void,
    showSubType: boolean
  ) => {
    const subTypes = ORG_SUB_TYPES_MAP[value] || [];
    return (
      <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
        <div className="form-col flex-1">
          <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
            Organization Type
          </label>
          <select
            className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white appearance-auto cursor-pointer focus:border-[#003366] focus:outline-none"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            <option value="">Select Type</option>
            <option value="Central Government">Central Government</option>
            <option value="State Government">State Government</option>
            <option value="Autonomous Body">Autonomous Body</option>
            <option value="Institute / College / School">
              Institute / College / School
            </option>
            <option value="University">University</option>
            <option value="Public Sector">Public Sector</option>
            <option value="Defence / Armed Forces">Defence / Armed Forces</option>
          </select>
        </div>
        {showSubType && (
          <div
            className="form-col flex-1"
            style={{ display: subTypes.length > 0 ? "flex" : "none" }}
          >
            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
              Sub-Type
            </label>
            <select
              className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white appearance-auto cursor-pointer focus:border-[#003366] focus:outline-none"
              value={subTypeValue}
              onChange={(e) => onSubTypeChange(e.target.value)}
            >
              <option value="">Select Sub-Type</option>
              {subTypes.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  };

  // ----- Render -----
  return (
    <>
      {isSubmitting && <LoadingOverlay message="Saving your information..." />}
      {apiError && (
        <div className="fixed top-20 right-5 z-[10001] bg-red-500 text-white px-4 py-2 rounded shadow-lg animate-pulse">
          {apiError}
        </div>
      )}

      <div className="fixed top-[14%] right-5 z-[99999] flex items-center gap-2 bg-[rgba(75,85,99,0.1)] text-[#4b5563] font-['Segoe_UI',sans-serif] text-xs font-bold py-1.5 px-3 border-[1.5px] border-[rgba(75,85,99,0.25)] rounded-full tracking-[0.5px] pointer-events-none select-none uppercase opacity-60">
        <svg
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Completed
      </div>

      <nav className="flex items-center justify-between w-full max-w-full mx-0 h-16 bg-[#003366] px-8 sticky top-0 z-[2000]">
        <a
          href="welcome.html"
          id="navLogo"
          className=" text-[22px] font-bold text-white leading-[1.2] no-underline flex items-baseline gap-3"
        >
          <span>OMS Portal</span>
          <span className="text-[14px] font-normal text-white/70 leading-none">
            Excellence in Examination Services
          </span>
        </a>
      </nav>

      <div className="page-wrapper flex flex-col md:flex-row w-full min-h-[calc(100vh-64px)]">
        {/* LEFT PANEL */}
        <div className="left-panel w-full md:w-[65%] bg-white relative flex flex-col min-h-[calc(100vh-64px)]">
          <div className="form-area px-5 md:px-[100px] py-5 md:py-20 flex-1 flex flex-col justify-start w-full">
            <h1 className="form-title text-[34px] font-bold text-[#003366] font-source-sans mb-0.5">
              Sign-Up as Observer
            </h1>
            <p className="form-subtitle text-base text-[#888] font-roboto mb-5">
              Create your observer account to access field assignments and
              examinations.
            </p>

            <div id="stepIndicator" className="text-lg font-bold text-[#003366] mb-6">
              Step {currentStep + 1} out of {STEPS.length}
            </div>

            {!showReview ? (
              <form
                id="observerForm"
                className="accordion-form flex flex-col mb-6"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Panel 1: Personal Details */}
                {currentStep === 0 && (
                  <div className="panel-item active block border-none bg-transparent">
                    <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
                      <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
                        Personal Details
                      </span>
                    </div>
                    <div className="panel-body overflow-visible">
                      <div className="panel-content p-0">
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              First Name
                            </label>
                            <input
                              type="text"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
                              placeholder="As per bank record"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Last Name
                            </label>
                            <input
                              type="text"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
                              placeholder="As per bank record"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Email Address
                            </label>
                            {!emailVerified ? (
                              <div className="input-group flex relative">
                                <input
                                  type="email"
                                  className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] border-r-0 rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter your email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                <button
                                  type="button"
                                  className="inline-btn h-11 px-[18px] bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
                                  onClick={() => handleOpenOtpModal("email", email)}
                                >
                                  Send OTP
                                </button>
                              </div>
                            ) : (
                              <div className="text-[#28a745] font-semibold flex items-center w-full h-11 border border-[#e2e8f0] rounded-md px-3 bg-[#f0fdf4]">
                                ✓ {email} is verified.
                              </div>
                            )}
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Date of Birth
                            </label>
                            <input
                              type="date"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                              value={dob}
                              onChange={(e) => setDob(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Gender
                            </label>
                            <select
                              className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Nationality
                            </label>
                            <select
                              className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                              value={nationality}
                              onChange={(e) => setNationality(e.target.value)}
                            >
                              <option value="">Select Nationality</option>
                              <option value="indian">Indian</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Mobile Number
                            </label>
                            {!phoneVerified ? (
                              <div className="input-group flex relative">
                                <div className="flex items-center bg-[#f8fafc] border-[1.5px] border-[#e0e0e0] border-r-0 px-3 text-[13px] text-[#333] font-medium">
                                  +91
                                </div>
                                <input
                                  type="tel"
                                  className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] border-l-0 px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter your mobile number"
                                  maxLength={10}
                                  value={phone}
                                  onChange={(e) =>
                                    setPhone(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))
                                  }
                                />
                                <button
                                  type="button"
                                  className="inline-btn h-11 px-[18px] bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
                                  onClick={() => handleOpenOtpModal("mobile", phone)}
                                >
                                  Send OTP
                                </button>
                              </div>
                            ) : (
                              <div className="text-[#28a745] font-semibold flex items-center w-full h-11 border border-[#e2e8f0] rounded-md px-3 bg-[#f0fdf4]">
                                ✓ {phone} is now verified.
                              </div>
                            )}
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block flex justify-between items-center">
                              <span>Alternate Mobile Number</span>
                            </label>
                            <div className="input-group flex">
                              <div className="flex items-center bg-[#f8fafc] border-[1.5px] border-[#e0e0e0] border-r-0 px-3 text-[13px] text-[#333] font-medium">
                                +91
                              </div>
                              <input
                                type="tel"
                                className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] border-l-0 border-r-[1.5px] px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                placeholder="Enter alternate mobile number"
                                maxLength={10}
                                value={altPhone}
                                onChange={(e) =>
                                  setAltPhone(e.target.value.replace(/[^0-9]/g, "").slice(0, 10))
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Panel 2: Verification & Banking Details */}
                {currentStep === 1 && (
                  <div className="panel-item active block border-none bg-transparent">
                    <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
                      <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
                        Verification &amp; Banking Details
                      </span>
                    </div>
                    <div className="panel-body overflow-visible">
                      <div className="panel-content p-0">
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Aadhar Number
                            </label>
                            {!aadharVerified ? (
                              <div className="input-group flex relative">
                                <input
                                  type="text"
                                  className="field-input flex-1 h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="12-digit Aadhar Number"
                                  maxLength={12}
                                  value={aadhar}
                                  onChange={(e) => setAadhar(e.target.value.replace(/[^0-9]/g, ""))}
                                />
                                <button
                                  type="button"
                                  className="inline-btn h-11 px-[18px] bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
                                  onClick={() => handleOpenOtpModal("aadhar", aadhar)}
                                >
                                  Get OTP
                                </button>
                              </div>
                            ) : (
                              <div className="text-[#28a745] font-semibold flex items-center w-full h-11 border border-[#e2e8f0] rounded-md px-3 bg-[#f0fdf4]">
                                ✓ {aadhar} is verified.
                              </div>
                            )}
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              PAN Number
                            </label>
                            <input
                              type="text"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
                              placeholder="Enter PAN Number"
                              maxLength={10}
                              value={pan}
                              onChange={(e) => setPan(e.target.value.toUpperCase())}
                            />
                          </div>
                        </div>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Bank Name
                            </label>
                            <select
                              className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                              value={bankName}
                              onChange={(e) => setBankName(e.target.value)}
                            >
                              <option value="">Select Bank</option>
                              <option value="SBI">State Bank of India (SBI)</option>
                              <option value="HDFC">HDFC Bank</option>
                              <option value="ICICI">ICICI Bank</option>
                              <option value="Kotak">Kotak Mahindra Bank</option>
                              <option value="Axis">Axis Bank</option>
                              <option value="PNB">Punjab National Bank</option>
                              <option value="Others">Others</option>
                            </select>
                            {bankName === "Others" && (
                              <input
                                type="text"
                                className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white mt-2.5"
                                placeholder="Enter other bank name"
                                value={otherBankName}
                                onChange={(e) => setOtherBankName(e.target.value)}
                              />
                            )}
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              IFSC Code
                            </label>
                            <input
                              type="text"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white uppercase"
                              placeholder="Enter IFSC code"
                              maxLength={11}
                              value={ifscCode}
                              onChange={(e) => setIfscCode(e.target.value.toUpperCase())}
                            />
                          </div>
                        </div>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Branch Name
                            </label>
                            <input
                              type="text"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-[#f8fafc] text-[#aaa] cursor-not-allowed"
                              placeholder="Auto-filled from IFSC Code"
                              value={branchName}
                              readOnly
                            />
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Account Number
                            </label>
                            <input
                              type="text"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                              placeholder="Enter account number"
                              value={accountNumber}
                              onChange={(e) => setAccountNumber(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Panel 3: Educational & Professional Details */}
                {currentStep === 2 && (
                  <div className="panel-item active block border-none bg-transparent">
                    <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
                      <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
                        Educational &amp; Professional Details
                      </span>
                    </div>
                    <div className="panel-body overflow-visible">
                      <div className="panel-content p-0">
                        <h3 className="form-subtitle mt-0 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
                          Educational Qualification
                        </h3>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Highest Qualification
                            </label>
                            <select
                              className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                              value={highestQualification}
                              onChange={(e) => setHighestQualification(e.target.value)}
                            >
                              <option value="">Select Qualification</option>
                              <option value="Bachelor's Degree">Bachelor's Degree</option>
                              <option value="Master's Degree">Master's Degree</option>
                              <option value="Doctorate">Doctorate</option>
                              <option value="Diploma">Diploma</option>
                              <option value="High School">High School</option>
                            </select>
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Institute/ University Name
                            </label>
                            <input
                              type="text"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                              placeholder="Enter Institute/ University Name"
                              value={instituteUniversity}
                              onChange={(e) => setInstituteUniversity(e.target.value)}
                            />
                          </div>
                        </div>

                        <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
                          Professional / Employment Details
                        </h3>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col full flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Employment Status
                            </label>
                            <div className="radio-group flex gap-6 mt-2">
                              <label className="radio-label flex items-center cursor-pointer font-roboto text-sm">
                                <input
                                  type="radio"
                                  name="employmentStatus"
                                  value="working"
                                  checked={employmentStatus === "working"}
                                  onChange={() => setEmploymentStatus("working")}
                                  className="mr-2 w-4 h-4 accent-[#003366]"
                                />
                                <span className="radio-text text-[#1a2b4a]">Working</span>
                              </label>
                              <label className="radio-label flex items-center cursor-pointer font-roboto text-sm">
                                <input
                                  type="radio"
                                  name="employmentStatus"
                                  value="retired"
                                  checked={employmentStatus === "retired"}
                                  onChange={() => setEmploymentStatus("retired")}
                                  className="mr-2 w-4 h-4 accent-[#003366]"
                                />
                                <span className="radio-text text-[#1a2b4a]">Retired</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Working Fields */}
                        {employmentStatus === "working" && (
                          <div id="workingFields" className="employment-section mt-4">
                            {renderOrgTypeSelect(
                              currOrgType,
                              setCurrOrgType,
                              currOrgSubType,
                              setCurrOrgSubType,
                              true
                            )}
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Current Organisation Name
                                </label>
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter organisation name"
                                  value={currOrgName}
                                  onChange={(e) => setCurrOrgName(e.target.value)}
                                />
                              </div>
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Post / Designation
                                </label>
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter designation"
                                  value={currPost}
                                  onChange={(e) => setCurrPost(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  From
                                </label>
                                <div className="date-input-group flex gap-3 w-full">
                                  <select
                                    className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                    value={currFromMonth}
                                    onChange={(e) => setCurrFromMonth(e.target.value)}
                                  >
                                    <option value="">Month</option>
                                    <option value="01">Jan</option>
                                    <option value="02">Feb</option>
                                    <option value="03">Mar</option>
                                    <option value="04">Apr</option>
                                    <option value="05">May</option>
                                    <option value="06">Jun</option>
                                    <option value="07">Jul</option>
                                    <option value="08">Aug</option>
                                    <option value="09">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                  </select>
                                  <input
                                    type="number"
                                    className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                    placeholder="Year"
                                    min="1950"
                                    max="2026"
                                    value={currFromYear}
                                    onChange={(e) => setCurrFromYear(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  To
                                </label>
                                <div className="date-input-group flex gap-3 w-full">
                                  <select
                                    className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                    disabled
                                  >
                                    <option value="">Month</option>
                                    <option value="Present">Present</option>
                                  </select>
                                  <input
                                    type="text"
                                    className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#94a3b8] bg-[#f8fafc] cursor-not-allowed"
                                    value="Present"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col flex-1">
                                <div className="add-last-org-container flex items-center justify-between mt-2">
                                  <span className="add-last-org-text text-base font-normal text-[#003366] font-source-sans">
                                    Add last organisation (Optional)
                                  </span>
                                  <button
                                    type="button"
                                    className="add-plus-btn w-8 h-8 p-0 bg-[#f8fafc] text-[#003366] border-[1.5px] border-[#003366] rounded-full text-lg font-semibold font-source-sans cursor-pointer transition-all hover:bg-[#003366] hover:text-white hover:scale-105 flex items-center justify-center"
                                    onClick={handleAddLastOrg}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div id="additionalOrgsContainer">
                              {additionalOrgs.map((org, idx) => {
                                const subTypes = ORG_SUB_TYPES_MAP[org.orgType || ""] || [];
                                return (
                                  <div
                                    key={org.id}
                                    className="optional-section border-t border-dotted border-[#cbd5e1] pt-5 mt-5 relative"
                                  >
                                    <button
                                      type="button"
                                      className="remove-org-btn absolute top-1 right-0 text-[#ef4444] text-[13px] font-semibold underline bg-none border-none cursor-pointer hover:text-[#dc2626]"
                                      onClick={() => handleRemoveLastOrg(org.id)}
                                    >
                                      Remove
                                    </button>
                                    <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                                      <div className="form-col flex-1">
                                        <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                          Organization Type
                                        </label>
                                        <select
                                          className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                          value={org.orgType}
                                          onChange={(e) =>
                                            updateAdditionalOrgData(org.id, "orgType", e.target.value)
                                          }
                                        >
                                          <option value="">Select Type</option>
                                          <option value="Central Government">Central Government</option>
                                          <option value="State Government">State Government</option>
                                          <option value="Autonomous Body">Autonomous Body</option>
                                          <option value="Institute / College / School">
                                            Institute / College / School
                                          </option>
                                          <option value="University">University</option>
                                          <option value="Public Sector">Public Sector</option>
                                          <option value="Defence / Armed Forces">
                                            Defence / Armed Forces
                                          </option>
                                        </select>
                                      </div>
                                      <div
                                        className="form-col flex-1"
                                        style={{ display: subTypes.length > 0 ? "flex" : "none" }}
                                      >
                                        <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                          Sub-Type
                                        </label>
                                        <select
                                          className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                          value={org.orgSubType}
                                          onChange={(e) =>
                                            updateAdditionalOrgData(org.id, "orgSubType", e.target.value)
                                          }
                                        >
                                          <option value="">Select Sub-Type</option>
                                          {subTypes.map((st) => (
                                            <option key={st} value={st}>
                                              {st}
                                            </option>
                                          ))}
                                        </select>
                                      </div>
                                    </div>
                                    <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                                      <div className="form-col flex-1">
                                        <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                          Last Organisation Name
                                        </label>
                                        <input
                                          type="text"
                                          className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                          placeholder="Enter last organisation name"
                                          value={org.orgName}
                                          onChange={(e) =>
                                            updateAdditionalOrgData(org.id, "orgName", e.target.value)
                                          }
                                        />
                                      </div>
                                      <div className="form-col flex-1">
                                        <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                          Post / Designation
                                        </label>
                                        <input
                                          type="text"
                                          className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                          placeholder="Enter designation"
                                          value={org.post}
                                          onChange={(e) =>
                                            updateAdditionalOrgData(org.id, "post", e.target.value)
                                          }
                                        />
                                      </div>
                                    </div>
                                    <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                                      <div className="form-col flex-1">
                                        <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                          From
                                        </label>
                                        <div className="date-input-group flex gap-3 w-full">
                                          <select
                                            className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                            value={org.fromMonth}
                                            onChange={(e) =>
                                              updateAdditionalOrgData(org.id, "fromMonth", e.target.value)
                                            }
                                          >
                                            <option value="">Month</option>
                                            <option value="01">Jan</option>
                                            <option value="02">Feb</option>
                                            <option value="03">Mar</option>
                                            <option value="04">Apr</option>
                                            <option value="05">May</option>
                                            <option value="06">Jun</option>
                                            <option value="07">Jul</option>
                                            <option value="08">Aug</option>
                                            <option value="09">Sep</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                          </select>
                                          <input
                                            type="number"
                                            className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                            placeholder="Year"
                                            min="1950"
                                            max="2026"
                                            value={org.fromYear}
                                            onChange={(e) =>
                                              updateAdditionalOrgData(org.id, "fromYear", e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                      <div className="form-col flex-1">
                                        <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                          To
                                        </label>
                                        <div className="date-input-group flex gap-3 w-full">
                                          <select
                                            className="field-select flex-2 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                            value={org.toMonth}
                                            onChange={(e) =>
                                              updateAdditionalOrgData(org.id, "toMonth", e.target.value)
                                            }
                                          >
                                            <option value="">Month</option>
                                            <option value="01">Jan</option>
                                            <option value="02">Feb</option>
                                            <option value="03">Mar</option>
                                            <option value="04">Apr</option>
                                            <option value="05">May</option>
                                            <option value="06">Jun</option>
                                            <option value="07">Jul</option>
                                            <option value="08">Aug</option>
                                            <option value="09">Sep</option>
                                            <option value="10">Oct</option>
                                            <option value="11">Nov</option>
                                            <option value="12">Dec</option>
                                          </select>
                                          <input
                                            type="number"
                                            className="field-input flex-1 w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                            placeholder="Year"
                                            min="1950"
                                            max="2026"
                                            value={org.toYear}
                                            onChange={(e) =>
                                              updateAdditionalOrgData(org.id, "toYear", e.target.value)
                                            }
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Retired Fields */}
                        {employmentStatus === "retired" && (
                          <div id="retiredFields" className="employment-section mt-4">
                            {renderOrgTypeSelect(
                              lastOrgType,
                              setLastOrgType,
                              lastOrgSubType,
                              setLastOrgSubType,
                              true
                            )}
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Last Organisation Name
                                </label>
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter last organisation name"
                                  value={lastOrgName}
                                  onChange={(e) => setLastOrgName(e.target.value)}
                                />
                              </div>
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Post / Designation
                                </label>
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter designation"
                                  value={lastPost}
                                  onChange={(e) => setLastPost(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Date of Retirement
                                </label>
                                <input
                                  type="date"
                                  id="dateOfRetirement"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  value={dateOfRetirement}
                                  onChange={(e) => setDateOfRetirement(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Panel 4: Address Details */}
                {currentStep === 3 && (
                  <div className="panel-item active block border-none bg-transparent">
                    <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
                      <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
                        Address Details
                      </span>
                    </div>
                    <div className="panel-body overflow-visible">
                      <div className="panel-content p-0">
                        <h3 className="form-subtitle mt-0 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
                          Residential Address
                        </h3>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Country
                            </label>
                            <select
                              className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                              value={resCountry}
                              onChange={(e) => setResCountry(e.target.value)}
                            >
                              <option value="">Select Country</option>
                              {countries.map((country) => (
                                <option key={country.country_id} value={country.country_id}>
                                  {country.country_name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              State
                            </label>
                            <select
                              className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                              value={resState}
                              onChange={(e) => setResState(e.target.value)}
                              disabled={!resCountry}
                            >
                              <option value="">Select State</option>
                              {states.map((state) => (
                                <option key={state.state_id} value={state.state_id}>
                                  {state.state_name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              City/ District
                            </label>
                            <select
                              className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                              value={resCity}
                              onChange={(e) => setResCity(e.target.value)}
                            >
                              <option value="">Select City/ District</option>
                              {cities.map((city) => (
                                <option key={city} value={city}>
                                  {city}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              PIN Code
                            </label>
                            <input
                              type="text"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                              placeholder="Enter PIN Code"
                              maxLength={6}
                              value={resPin}
                              onChange={(e) => setResPin(e.target.value.replace(/[^0-9]/g, ""))}
                            />
                          </div>
                        </div>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col full flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Address Line 1
                            </label>
                            <input
                              type="text"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                              placeholder="Enter Address Line 1"
                              value={resAddr1}
                              onChange={(e) => setResAddr1(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col full flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Address Line 2
                            </label>
                            <input
                              type="text"
                              className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                              placeholder="Enter Address Line 2"
                              value={resAddr2}
                              onChange={(e) => setResAddr2(e.target.value)}
                            />
                          </div>
                        </div>

                        <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
                          Select preferred work location
                        </h3>
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Preferred State
                            </label>
                            <select
                              className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                              value={prefState}
                              onChange={(e) => setPrefState(e.target.value)}
                            >
                              <option value="">Select State</option>
                              {states.map((state) => (
                                <option key={state.state_id} value={state.state_id}>
                                  {state.state_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        {prefState && (
                          <div id="citySelectionSection" className="mt-4">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Select up to 3 Cities
                            </label>
                            <CustomMultiSelect
                              cities={cities}
                              selectedCities={selectedCities}
                              onToggleCity={handleToggleCity}
                              maxSelect={3}
                            />
                            <p id="citySelectionMeta" className="text-[13px] text-[#6b7280] mt-2">
                              Selected: {selectedCities.length}/3
                            </p>
                          </div>
                        )}

                        {/* Current Organisation Address */}
                        {employmentStatus === "working" && (
                          <div id="currOrgAddressSection">
                            <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
                              Current Organisation Address
                            </h3>
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Country
                                </label>
                                <select
                                  className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                  value={currOrgCountry}
                                  onChange={(e) => setCurrOrgCountry(e.target.value)}
                                >
                                  <option value="">Select Country</option>
                                  {countries.map((country) => (
                                    <option key={country.country_id} value={country.country_id}>
                                      {country.country_name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  State
                                </label>
                                <select
                                  className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                  value={currOrgState}
                                  onChange={(e) => setCurrOrgState(e.target.value)}
                                  disabled={!currOrgCountry}
                                >
                                  <option value="">Select State</option>
                                  {states.map((state) => (
                                    <option key={state.state_id} value={state.state_id}>
                                      {state.state_name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  City/ District
                                </label>
                                <select
                                  className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                  value={currOrgCity}
                                  onChange={(e) => setCurrOrgCity(e.target.value)}
                                >
                                  <option value="">Select City/ District</option>
                                  {cities.map((city) => (
                                    <option key={city} value={city}>
                                      {city}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  PIN Code
                                </label>
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter PIN Code"
                                  maxLength={6}
                                  value={currOrgPin}
                                  onChange={(e) =>
                                    setCurrOrgPin(e.target.value.replace(/[^0-9]/g, ""))
                                  }
                                />
                              </div>
                            </div>
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col full flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Address Line 1
                                </label>
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter Address Line 1"
                                  value={currOrgAddr1}
                                  onChange={(e) => setCurrOrgAddr1(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col full flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Address Line 2
                                </label>
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter Address Line 2"
                                  value={currOrgAddr2}
                                  onChange={(e) => setCurrOrgAddr2(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Last Organisation Address */}
                        {employmentStatus === "retired" && (
                          <div id="lastOrgAddressSection">
                            <h3 className="form-subtitle mt-6 mb-4 text-[15px] text-[#003366] font-semibold bg-[#f8fafc] border border-[#e2e8f0] rounded-md p-3">
                              Last Organisation Address
                            </h3>
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Country
                                </label>
                                <select
                                  className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                  value={lastOrgCountry}
                                  onChange={(e) => setLastOrgCountry(e.target.value)}
                                >
                                  <option value="">Select Country</option>
                                  {countries.map((country) => (
                                    <option key={country.country_id} value={country.country_id}>
                                      {country.country_name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  State
                                </label>
                                <select
                                  className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                  value={lastOrgState}
                                  onChange={(e) => setLastOrgState(e.target.value)}
                                  disabled={!lastOrgCountry}
                                >
                                  <option value="">Select State</option>
                                  {states.map((state) => (
                                    <option key={state.state_id} value={state.state_id}>
                                      {state.state_name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  City/ District
                                </label>
                                <select
                                  className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                  value={lastOrgCity}
                                  onChange={(e) => setLastOrgCity(e.target.value)}
                                >
                                  <option value="">Select City/ District</option>
                                  {cities.map((city) => (
                                    <option key={city} value={city}>
                                      {city}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="form-col flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  PIN Code
                                </label>
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter PIN Code"
                                  maxLength={6}
                                  value={lastOrgPin}
                                  onChange={(e) =>
                                    setLastOrgPin(e.target.value.replace(/[^0-9]/g, ""))
                                  }
                                />
                              </div>
                            </div>
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col full flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Address Line 1
                                </label>
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter Address Line 1"
                                  value={lastOrgAddr1}
                                  onChange={(e) => setLastOrgAddr1(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                              <div className="form-col full flex-1">
                                <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                  Address Line 2
                                </label>
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                  placeholder="Enter Address Line 2"
                                  value={lastOrgAddr2}
                                  onChange={(e) => setLastOrgAddr2(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Panel 5: Upload Section */}
                {currentStep === 4 && (
                  <div className="panel-item active block border-none bg-transparent">
                    <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
                      <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
                        Upload Section
                      </span>
                    </div>
                    <div className="panel-body overflow-visible">
                      <div className="panel-content p-0">
                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col full flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Educational Document{" "}
                              <span className="text-xs text-[#6b7280] font-normal ml-1">
                                (Max 1 MB)
                              </span>
                            </label>
                            <div className="file-input-wrap relative w-full h-11">
                              <input
                                type="text"
                                className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
                                placeholder="Upload Highest Qualification Document"
                                value={eduProofName}
                                readOnly
                              />
                              <svg
                                className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              >
                                <path d="M12 5v14M5 12l7-7 7 7" />
                              </svg>
                              <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept=".pdf,.jpg,.png"
                                onChange={(e) =>
                                  handleFileChange(e, setEduProofFile, setEduProofName)
                                }
                              />
                            </div>
                          </div>
                        </div>

                        {employmentStatus === "working" ? (
                          <div className="form-row flex gap-6 mb-3 flex-col md:flex-row" id="uploadRowWorking">
                            <div className="form-col flex-1">
                              <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                Proof of Employment Type
                              </label>
                              <select
                                className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                value={workingProofType}
                                onChange={(e) => setWorkingProofType(e.target.value)}
                              >
                                <option value="">Select Document Type</option>
                                <option value="ID card">ID card</option>
                              </select>
                            </div>
                            <div className="form-col flex-1">
                              <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                Current Organisation Proof{" "}
                                <span className="text-xs text-[#6b7280] font-normal ml-1">
                                  (Max 1 MB)
                                </span>
                              </label>
                              <div className="file-input-wrap relative w-full h-11">
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
                                  placeholder="Upload Document"
                                  value={empProofName}
                                  readOnly
                                />
                                <svg
                                  className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                >
                                  <path d="M12 5v14M5 12l7-7 7 7" />
                                </svg>
                                <input
                                  type="file"
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  accept=".pdf,.jpg,.png"
                                  onChange={(e) =>
                                    handleFileChange(e, setEmpProofFile, setEmpProofName)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="form-row flex gap-6 mb-3 flex-col md:flex-row" id="uploadRowLastOrg">
                            <div className="form-col flex-1">
                              <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                Proof of Employment Type
                              </label>
                              <select
                                className="field-select w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-white"
                                value={lastOrgProofType}
                                onChange={(e) => setLastOrgProofType(e.target.value)}
                              >
                                <option value="">Select Document Type</option>
                                <option value="Service Certificate">Service Certificate</option>
                                <option value="PPO">PPO</option>
                                <option value="ID card">ID card</option>
                              </select>
                            </div>
                            <div className="form-col flex-1">
                              <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                                Last Organisation Proof{" "}
                                <span className="text-xs text-[#6b7280] font-normal ml-1">
                                  (Max 1 MB)
                                </span>
                              </label>
                              <div className="file-input-wrap relative w-full h-11">
                                <input
                                  type="text"
                                  className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
                                  placeholder="Upload Document"
                                  value={lastCertName}
                                  readOnly
                                />
                                <svg
                                  className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                >
                                  <path d="M12 5v14M5 12l7-7 7 7" />
                                </svg>
                                <input
                                  type="file"
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  accept=".pdf,.jpg,.png"
                                  onChange={(e) =>
                                    handleFileChange(e, setLastCertFile, setLastCertName)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Aadhar Card{" "}
                              <span className="text-xs text-[#6b7280] font-normal ml-1">
                                (Max 1 MB)
                              </span>
                            </label>
                            <div className="file-input-wrap relative w-full h-11">
                              <input
                                type="text"
                                className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
                                placeholder="Upload Document"
                                value={aadharUploadName}
                                readOnly
                              />
                              <svg
                                className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              >
                                <path d="M12 5v14M5 12l7-7 7 7" />
                              </svg>
                              <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept=".pdf,.jpg,.png"
                                onChange={(e) =>
                                  handleFileChange(e, setAadharUploadFile, setAadharUploadName)
                                }
                              />
                            </div>
                          </div>
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              PAN Card{" "}
                              <span className="text-xs text-[#6b7280] font-normal ml-1">
                                (Max 1 MB)
                              </span>
                            </label>
                            <div className="file-input-wrap relative w-full h-11">
                              <input
                                type="text"
                                className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
                                placeholder="Upload Document"
                                value={panUploadName}
                                readOnly
                              />
                              <svg
                                className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              >
                                <path d="M12 5v14M5 12l7-7 7 7" />
                              </svg>
                              <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept=".pdf,.jpg,.png"
                                onChange={(e) =>
                                  handleFileChange(e, setPanUploadFile, setPanUploadName)
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Cancelled Cheque / Passbook Copy{" "}
                              <span className="text-xs text-[#6b7280] font-normal ml-1">
                                (Max 1 MB)
                              </span>
                            </label>
                            <div className="file-input-wrap relative w-full h-11">
                              <input
                                type="text"
                                className="field-input w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white pr-[46px] cursor-pointer"
                                placeholder="Upload Document"
                                value={bankProofName}
                                readOnly
                              />
                              <svg
                                className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              >
                                <path d="M12 5v14M5 12l7-7 7 7" />
                              </svg>
                              <input
                                type="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                accept=".pdf,.jpg,.png"
                                onChange={(e) =>
                                  handleFileChange(e, setBankProofFile, setBankProofName)
                                }
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-row flex gap-6 mb-3 flex-col md:flex-row">
                          <div className="form-col full flex-1">
                            <label className="field-label text-base font-normal text-[#003366] mb-1.5 block">
                              Others{" "}
                              <span className="text-xs text-[#6b7280] font-normal ml-1">
                                (Max 1 MB each)
                              </span>
                            </label>
                            <div id="othersDocContainer">
                              {othersDocs.map((doc, idx) => (
                                <div key={doc.id} className="others-doc-entry flex items-center gap-2.5 mb-2.5 flex-wrap">
                                  <input
                                    type="text"
                                    className="field-input flex-1 min-w-[180px] h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#1a2b4a] bg-white"
                                    placeholder="Enter document name (e.g. Passport, NOC...)"
                                    value={doc.name}
                                    onChange={(e) => handleOthersDocNameChange(doc.id, e.target.value)}
                                  />
                                  <div className="flex-1 min-w-[200px] relative h-11">
                                    <input
                                      type="text"
                                      className="w-full h-11 border-[1.5px] border-[#e0e0e0] rounded-none px-3.5 text-[13px] font-roboto text-[#aaa] bg-[#f8fafc] cursor-not-allowed"
                                      placeholder="Upload Document"
                                      value={doc.fileName}
                                      readOnly
                                    />
                                    <svg
                                      className="file-icon absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#aaa] pointer-events-none"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="1.5"
                                    >
                                      <path d="M12 5v14M5 12l7-7 7 7" />
                                    </svg>
                                    <input
                                      type="file"
                                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                      accept=".pdf,.jpg,.png"
                                      onChange={(e) =>
                                        handleOthersDocFileChange(
                                          doc.id,
                                          e.target.files?.[0] || null,
                                          e.target.files?.[0]?.name || ""
                                        )
                                      }
                                    />
                                  </div>
                                  {idx > 0 && (
                                    <button
                                      type="button"
                                      className="others-remove-btn bg-none border-none text-[#c62828] text-lg cursor-pointer p-0 leading-none"
                                      onClick={() => handleRemoveOthersDoc(doc.id)}
                                    >
                                      ✕
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                            <button
                              type="button"
                              id="addMoreOthersBtn"
                              className="inline-btn hidden mt-2.5 w-auto py-1.5 px-[18px] text-[13px] bg-[#003366] text-white border-[1.5px] border-[#003366] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
                              onClick={handleAddOthersDoc}
                            >
                              + Add More Document
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Panel 6: Live Selfie */}
                {currentStep === 5 && (
                  <div className="panel-item active block border-none bg-transparent">
                    <div className="panel-header mb-5 pb-3 border-b-2 border-[#003366] flex items-center">
                      <span className="panel-title text-xl font-bold text-[#003366] font-source-sans">
                        Live Selfie Verification
                      </span>
                    </div>
                    <div className="panel-body overflow-visible">
                      <div className="panel-content min-h-[400px] flex flex-col items-center justify-center gap-6">
                        <div
                          id="camera-container"
                          className="w-[280px] h-[280px] bg-[#f8fafc] border-2 border-dashed border-[#003366] rounded-full overflow-hidden flex justify-center items-center relative"
                        >
                          {!cameraActive && !selfieCaptured && (
                            <svg
                              id="camera-placeholder"
                              className="w-16 h-16 text-[#cbd5e1]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          )}
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className={`${cameraActive && !selfieCaptured ? "block" : "hidden"} w-full h-full object-cover absolute inset-0`}
                          ></video>
                          <canvas
                            ref={canvasRef}
                            className={`${selfieCaptured ? "block" : "hidden"} w-full h-full object-cover absolute inset-0`}
                          ></canvas>
                        </div>
                        <div className="flex gap-4 items-center">
                          {!cameraActive && !selfieCaptured && (
                            <button
                              type="button"
                              className="create-btn w-[200px] h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
                              onClick={handleStartCamera}
                            >
                              Open Camera
                            </button>
                          )}
                          {cameraActive && !selfieCaptured && (
                            <button
                              type="button"
                              className="create-btn w-[200px] h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
                              onClick={handleCaptureSelfie}
                            >
                              Capture Selfie
                            </button>
                          )}
                          {selfieCaptured && (
                            <button
                              type="button"
                              className="inline-btn w-auto px-4 h-11 bg-[#003366] text-white border-[1.5px] border-[#003366] text-[13px] font-bold font-source-sans cursor-pointer whitespace-nowrap transition-colors hover:bg-[#004080]"
                              onClick={handleRetakeSelfie}
                            >
                              Retake Photo
                            </button>
                          )}
                        </div>

                        <div className="w-full border-t border-[#e2e8f0] mt-4 pt-4">
                          <div className="tc-row flex items-center justify-start gap-2 mt-2">
                            <input
                              type="checkbox"
                              className="tc-cb w-4 h-4 border-[1.5px] border-[#e0e0e0] cursor-pointer accent-[#003366]"
                              id="tcCheck"
                              checked={tcChecked}
                              onChange={(e) => setTcChecked(e.target.checked)}
                            />
                            <label className="tc-text text-[13px] text-[#333] font-roboto" htmlFor="tcCheck">
                              I hereby declare that the information provided by me is true and correct to the
                              best of my knowledge.
                            </label>
                          </div>
                          <button
                            type="submit"
                            className="create-btn w-full h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors mt-6"
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="text-right text-[#c62828] text-xs font-medium mt-2.5">
                  All fields marked with * are mandatory.
                </div>
                <div className="next-arrow-container flex justify-center mt-7.5 mb-2.5">
                  <button
                    type="button"
                    className="create-btn w-full h-[50px] bg-[#003366] text-white border-none text-base font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors mt-6"
                    onClick={handleNextStep}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Save & Next"}
                  </button>
                </div>

                <div className="login-row flex justify-center items-center gap-1.5 mt-3.5">
                  <span className="text-[13px] text-[#333] font-roboto">
                    Already have an account?
                  </span>
                  <a href="welcome.html" className="text-[13px] text-[#003366] font-bold underline font-source-sans">
                    Log in
                  </a>
                </div>
              </form>
            ) : (
              <div id="reviewSection" className="animate-[fadeIn_0.4s_ease]">
                <h2 className="form-title text-[34px] font-bold text-[#003366] font-source-sans mb-0.5">
                  Review Your Details
                </h2>
                <p className="form-subtitle text-base text-[#888] font-roboto mb-5">
                  Please verify your information before final submission.
                </p>
                <div
                  id="reviewContent"
                  className="bg-white p-6 rounded-md mb-6 border border-[#e2e8f0] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]"
                >
                  {renderReviewContent()}
                </div>
                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    className="inline-btn w-1/2 h-12 text-base bg-transparent text-[#666] border-1.5 border-[#003366] rounded-none font-bold font-source-sans cursor-pointer"
                    onClick={handleEditReview}
                  >
                    Edit Details
                  </button>
                  <button
                    type="button"
                    className="create-btn w-1/2 h-12 text-base bg-[#003366] text-white border-none font-bold font-source-sans cursor-pointer hover:bg-[#004080] transition-colors"
                    onClick={handleConfirmSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Confirm & Submit"}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="form-footer py-2.5 px-5 md:px-[100px] flex justify-center items-center flex-wrap gap-1">
            <span className="footer-copy text-xs text-[#6b7280] font-source-sans">
              © 2026 OMS (India) Limited. All rights reserved.
            </span>
            <span className="footer-links text-xs font-source-sans">
              <a href="#" className="text-[#1a56db] no-underline hover:underline">
                Privacy Policy
              </a>
              <span className="sep mx-1.5 text-[#6b7280]">|</span>
              <a href="#" className="text-[#1a56db] no-underline hover:underline">
                Terms of Use
              </a>
              <span className="sep mx-1.5 text-[#6b7280]">|</span>
              <a href="#" className="text-[#1a56db] no-underline hover:underline">
                Help &amp; Support
              </a>
            </span>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="right-panel sticky top-9 self-start h-[calc(100vh-54px)] w-full md:w-[35%] bg-cover bg-right bg-no-repeat flex flex-col justify-end px-5 md:px-20 pb-10 text-white relative"
          style={{ backgroundImage: "url('/building_bg.jpg')" }}
        >
          <div className="right-overlay absolute inset-0 bg-gradient-to-b from-[rgba(15,52,96,0.2)] to-[rgba(15,52,96,0.9)] z-0"></div>
          <div className="right-content relative z-10 max-w-[500px]">
            <div className="right-headline text-[40px] font-bold leading-tight mb-6 font-source-sans">
              Driving Excellence in Examination Services across India.
            </div>
            <div className="right-desc text-base leading-relaxed opacity-90 mb-8 font-roboto">
              Sign up as a observer to play a vital role in ensuring fair and
              transparent examination processes across the country.
            </div>
            <div className="right-credit text-xs opacity-60">Building Excellence by xyz</div>
          </div>
        </div>
      </div>

      <OMSVersionFooter />

      {/* OTP Modal */}
      <OtpModal
        isOpen={otpModalOpen}
        title={
          otpContext === "email"
            ? "Verify Email Address"
            : otpContext === "mobile"
            ? "Verify Mobile Number"
            : "Verify Aadhar Number"
        }
        description={`An OTP has been sent to ${otpTarget}.`}
        onVerify={handleVerifyOtp}
        onCancel={() => {
          setOtpModalOpen(false);
          setOtpContext(null);
          setOtpTarget("");
        }}
      />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .field-label::after {
          content: " *";
          color: #cc3333;
        }
        input[type="email"].field-input,
        #email.field-input {
          text-transform: none;
        }
        .field-input::placeholder {
          color: #aaa;
          text-transform: none;
        }
      `}</style>
    </>
  );
};

export default SignupObserver;
