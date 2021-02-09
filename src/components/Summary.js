import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { mockedUser } from '../utils/mockedCourses';
import CourseContext from '../contexts/CourseContext';
import UserContext from '../contexts/UserContext';

export default function Summary(){
    const {courseData, setCourseData} = useContext(CourseContext);
    const { user, setUser } = useContext(UserContext);
    const [percentage, setPercentage] = useState(99);
    const [usedValue, setUsedValue] = useState(percentage);
    const history = useHistory();
    console.log(user);
    useEffect(()=>{
        if(percentage <= 8){
            setUsedValue(8);
        }
    }, [])

    useEffect(()=>{
        setUser(mockedUser);
    }, [])

    function redirect(){
        history.push('/curso/topico');
    }

    return (
        <Container>
            <div>
            <Icon src={user.icon}/>
            <Advance>
                <p>Você não iniciou esse curso ainda</p>
                <div>
                   <progress id="file" value={usedValue} max="100"> 
                   </progress>
                   <P percentage={percentage}>{percentage}%</P>
                </div>
            </Advance>
            </div>
            <Button onClick={redirect}>Iniciar curso &gt;&gt;</Button>
        </Container>
    );
}

const Container = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    background: #FFF;
    position: absolute;
    left: 10%;
    top: 75%;
    height: 180px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    padding: 0 5%;
    & > div {
        display: flex;
        justify-content: left;
    }
`;

const Icon = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 25px;
`;

const P = styled.p`
    left: ${props => props.percentage <= 10 ? '1.5%' : props.percentage > 99 ? (props.percentage-11)+"%" : (props.percentage-8)+"%"};
`;

const Advance = styled.div`
    font-size: 15px;  
    & > div {
        height: 20px;
        position: relative;
        p{
            position: absolute;
            bottom: 0;
            font-size: 10px;
            color: white;
            font-weight: bold;
        }
    }
    progress {
        border-radius: 7px; 
        width: 100%;
        height: 15px;
        box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 );
    }
    progress::-webkit-progress-bar {
        background-color: #EAEAEA;
        border-radius: 7px;
    }
    progress::-webkit-progress-value {
        background-color: #76DF93;
        border-radius: 7px;
        color: white;
    }
`;


const Button = styled.button`
    background-color: #46A7D4;
    color: white;
    font-weight: bold;
    width: 20%;
    height: 40px;
    border-radius: 5px;
    font-size: 15px;
    text-align: center;
    &:hover{
        cursor:pointer;
    }
`;