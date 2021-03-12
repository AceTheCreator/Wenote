import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import { AiOutlineHome } from 'react-icons/ai';
import {BiNotepad, BiSearch, BiLogOutCircle} from 'react-icons/bi';
import {SiProtoDotIo} from 'react-icons/si';
import {ActiveNavLink, AfterAuthNav, AfterAuthWrapper, Logo, LogoText, LogoWrapper, NavLink, NavLinks, NavText} from './navbar.style';
import logo from '../../static/wenote-logo.svg';

export default function AfterAuth() {
    const links = {
        home: {
            path: "/",
            icon:  <AiOutlineHome fontSize="24px" /> ,
            name: <NavText>Home</NavText>
        },
        note: {
            path: "/notes",
            icon:  <BiNotepad fontSize="24px" /> ,
            name: <NavText>Notes</NavText>
        },
        search: {
            path: "/search",
            icon:  <BiSearch fontSize="24px" /> ,
            name: <NavText>Search</NavText>
        },
        tasks: {
            path: "/tasks",
            icon:  <SiProtoDotIo fontSize="24px" /> ,
            name: <NavText>Tasks</NavText>
        }
    }
    const history = useHistory();
    const [active, setActive] = useState("home");
    const {pathname} = history.location;
    console.log(pathname);    
    useState(() => {
        if(pathname.includes("home") || pathname === "/"){
            setActive("home");
        }else if(pathname.includes("/note")){
            setActive("note")
        }else if(pathname.includes("search")){
            setActive("search");
        }else if(pathname.includes("todo")){
            setActive("todo")
        }else{
            setActive("")
        }
    },[pathname]);
    return (
        <AfterAuthNav>
        <AfterAuthWrapper>
        <NavLinks>
        <LogoWrapper>
        <Logo src={logo} alt="chromenote" />
        <LogoText>chromenote</LogoText>
        </LogoWrapper>
        {active === "home" ?
        <ActiveNavLink style={{
            marginTop:"50px"
        }}>
            {links.home.icon}
            {links.home.name}
        </ActiveNavLink>:<Link onClick={() =>setActive("home")} to={links.home.path}>
        <NavLink style={{
            marginTop:"50px"
        }}>
            {links.home.icon}
            {links.home.name}
        </NavLink>
        </Link>}
        {active === "note" ?
        <ActiveNavLink style={{
        }}>
            {links.note.icon}
            {links.note.name}
        </ActiveNavLink>:<Link  onClick={() =>setActive("note")} to={links.note.path}>
        <NavLink style={{
        }}>
            {links.note.icon}
            {links.note.name}
        </NavLink>
        </Link>}
        {active === "search" ?
        <ActiveNavLink style={{
        }}>
            {links.search.icon}
            {links.search.name}
        </ActiveNavLink>:<Link  onClick={() =>setActive("search")} to={links.search.path}>
        <NavLink style={{
        }}>
            {links.search.icon}
            {links.search.name}
        </NavLink>
        </Link>}
        {active === "tasks" ?
        <ActiveNavLink style={{
        }}>
            {links.tasks.icon}
            {links.tasks.name}
        </ActiveNavLink>:<Link  onClick={() => setActive("tasks")} to={links.tasks.path}>
        <NavLink style={{
        }}>
            {links.tasks.icon}
            {links.tasks.name}
        </NavLink>
        </Link>}
        </NavLinks>
        <NavLinks>
            <NavLink>
                <BiLogOutCircle fontSize="24px" />
                <NavText>Logout</NavText>
            </NavLink>
        </NavLinks>
       </AfterAuthWrapper>
        </AfterAuthNav>
    )
};