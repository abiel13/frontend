// "use client";
// import { useAppContext } from "@/app/context/context";
// import Link from "next/link";
// import React, { useState } from "react";
// import { toast , ToastContainer } from "react-toastify";
// import { BiSolidXCircle , BiSolidLogOut } from "react-icons/bi";
// import {FaHandHoldingUsd} from 'react-icons/fa'
// import {AiFillWallet , AiFillSetting} from 'react-icons/ai'
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import 'react-toastify/dist/ReactToastify.css'

// const Navbar = () => {
//   const { userData } = useAppContext();
//   const [visible, setVisible] = useState<boolean>(false);
//   let initials = userData?.firstname[0] + "." + userData?.lastname[0];4
//   const router = useRouter()

// const logout = async () => {
//   setVisible(false)
//  console.log(userData?.token)
//  toast('connecting to server')
//  try {
//     await axios.get('https://api.alteflix.com/api/v1/accounts/logout' , { headers : {Authorization :`Bearer ${userData?.token}`}}).then(res =>{
//          console.log(res.data)
//     toast.success('logout sucessful')
//     localStorage.removeItem('AlteFlixUser');
//   router.push('/auth/login')
//     }
//     ).catch((error)=>{
//     toast.error('an error occured')
//     })
//  } catch (error) {

//  }

//   }

//   return (
//     <>
//       <div
//         style={{ borderBottom: "1px solid #444" }}
//         className=" w-full px-3 flex font-bold items-center justify-between py-3"
//       >
//         <div className="text-2xl tracking-wider font-bold text-white">
//           Alte<span className="text-red-700">Flix</span>
//         </div>
//         <div
//           onClick={() => setVisible(true)}
//           style={{ background: "red" }}
//           className="w-[50px] h-[50px] cursor-pointer rounded-full flex items-center justify-center text-white"
//         >
//           {initials == "undefined.undefined" ? "" : initials}
//         </div>
//       </div>
//       <div
//         style={{ background: "black", borderLeft: "1px solid white" }}
//         className={`${
//           visible ? "block" : "hidden"
//         } fixed w-[90vw] md:w-[20vw] px-3  top-0 bottom-0 right-0 z-50`}
//       >
//         <div className="text-white pr-2 w-full pt-3 flex justify-end items-center">
//           <BiSolidXCircle
//             onClick={() => setVisible(false)}
//             fill="red"
//             fontSize={24}
//           />
//         </div>
//         <Link
//           style={{ borderBottom: "1px solid white" }}
//           className="flex gap-4 px-4 pb-8"
//           href={"/userprofile"}
//         >
//           <div
//             style={{ background: "red", color: "white" }}
//             className="text-white font-bold px-3  py-3 rounded-lg "
//           >
//             {" "}
//             {initials == "undefined.undefined" ? "" : initials}
//           </div>
//           <div className="text-white">
//             <div>
//               {userData?.firstname} {userData?.lastname}
//             </div>
//             <div>{userData?.email}</div>
//           </div>
//         </Link>
//         <Link
//           style={{ borderBottom: "1px solid white" }}
//           className="flex  items-center gap-4 text-white font-normal tracking-wide px-4 py-6"
//           href={"/subscriptions"}
//         >
//           <FaHandHoldingUsd fontSize={24} />
//           Manage Subscription
//         </Link>
//         <Link
//           style={{ borderBottom: "1px solid white" }}
//           className="flex  items-center gap-4 text-white font-normal tracking-wide px-4 py-6"
//           href={"/userprofile"}
//         >
//           <AiFillWallet fontSize={24} />
//           Wallet
//         </Link>
//         <Link
//           style={{ borderBottom: "1px solid white" }}
//           className="flex items-center  gap-4 text-white font-normal tracking-wide px-4 py-6"
//           href={"/userprofile"}
//         >
//           <AiFillSetting fontSize={24} />
//           Settings
//         </Link>
//         <div
//           style={{ borderBottom: "1px solid white" }}
//           className="flex cursor-pointer  items-center  gap-4 text-white font-normal tracking-wide px-4 py-6"
//           onClick={() => logout()}
//         >
//          <BiSolidLogOut fontSize={24} />
//           Logout
//         </div>

//         <ToastContainer />
//       </div>
//     </>
//   );
// };

// export default Navbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Stack } from "@mui/material";

function HideOnScroll({
  children,
}: {
  children: React.ReactNode | React.ReactElement | undefined | any;
}) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar() {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        color: "white",
      },
      children: `${name.split(" ")[0][0]}.${name.split(" ")[1][0]}`,
    };
  }

  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar sx={{ bgcolor: "white" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" color="black" component="div">
              Alte <span className="text-red-500">Flix</span>
            </Typography>
            <Avatar {...stringAvatar("Abiel Asimiea")} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      {/* <Stack sx={{ position: "fixed", top: "0", bottom: 0, right: 0 , width:'60%'  , bgcolor:'whitesmoke' }}></Stack> */}
    </>
  );
}
