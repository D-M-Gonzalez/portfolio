import React, {useRef, useState, useEffect, useLayoutEffect} from 'react'
import { useNavigate, useLocation} from "react-router-dom";
import MainMenu from '../../components/Menu/MainMenu'
import Intro from '../Intro/Intro'
import Box from '@mui/material/Box'
import Main from '../Main/Main'
import TechSkills from '../TechSkills/TechSkills'
import SoftSkills from '../SoftSkills/SoftSkills'
import Examples from '../Examples/Examples'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import styles from './Layout.module.css'

export default function Layout() {
	const location = useLocation();
    const [urlUpdate, setUrlUpdate] = useState("manual");
    let navigate = useNavigate();
    const myRef = [];
    myRef.push({id:useRef(),lnk:"/intro"});
    myRef.push({id:useRef(),lnk:"/main"});
    myRef.push({id:useRef(),lnk:"/techskills"});
    myRef.push({id:useRef(),lnk:"/softskills"});
	myRef.push({id:useRef(),lnk:"/examples"});
	myRef.push({id:useRef(),lnk:"/portfolio"});
	myRef.push({id:useRef(),lnk:"/contact"});
    const mainRef = useRef()

    const scrollHandler = () => {
        /*myRef.forEach((el,pos,arr)=>{
            if (mainRef.current.scrollTop > el.id.current.offsetTop-700 && (!arr[pos+1] || mainRef.current.scrollTop < arr[pos+1].id.current.offsetTop-700) && el.lnk !== location.pathname ){
                setUrlUpdate("auto");
                navigate(el.lnk);  
            }
        })*/
    }

    useEffect(()=>{
        myRef.forEach((el)=>{
            if (location.pathname === el.lnk && urlUpdate === "manual"){
                el.id.current.scrollIntoView({block:'start', behavior: 'smooth'})
            }                
        });    
        setUrlUpdate("manual");   
    },[location]);

  return (
      <Box className={styles.mainScroll} ref={mainRef} onScroll={scrollHandler} sx={{height:"100vh",overflowY:"scroll",overflowX:"hidden"}}>
		<Box ref={myRef[0].id} ><Intro/></Box>
		<Box mt={5} ref={myRef[1].id} ><Main /></Box>
		<Box mt={20} ref={myRef[2].id} ><TechSkills /></Box>
		<Box mt={20} ref={myRef[3].id}><SoftSkills /></Box>
		<Box mt={10} ref={myRef[4].id}><Examples /></Box>
		<Box mt={20} ref={myRef[5].id}><Portfolio /></Box>
		<Box mt={20} ref={myRef[6].id}><Contact /></Box>
        <Box sx={{height:50}}/>
		<Box ml={-1} sx={{position:"fixed",width:1,alignSelf:"flex-start",top:0}}>
          <MainMenu />
        </Box>
      </Box>
  )
}
