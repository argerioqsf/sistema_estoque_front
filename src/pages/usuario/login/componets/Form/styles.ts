import styled from 'styled-components';
import Image from 'next/image';

interface Propsbutton {
    onClick: any;
    active: any;
}

export const Container = styled.div`
    width:100%;
    max-width: 1500px;
    max-height:100vh;
    height:100vh;
    /* min-height:100%; */
    /* background-color: #fff; */
    /* background-color:  #2C3A86 ; */
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    position:relative;
    /* padding-top:50px; */
    /* opacity:0.3; */
`;

export const ContainerLogin = styled.div`
    display: flex ;
    flex-direction: row ;
    justify-content:space-between;
    align-items: center;
    /* background-color: #003; */
    width: 100%;
`;

//CARD
    export const ContainerCard = styled.div`
        /* background-color: #865 ; */
        /* padding: 15px; */
        width:50% ;
        display:flex ;
        flex-direction: row;
        justify-content: center;
        /* align-items: center;
        padding-top: 50px;
        padding-bottom: 50px; */
    `;
        export const ContentCardLogin = styled.form`
            display:flex ;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* background-color: #654; */
            width: 100%;
            /* min-width: 370px; */
            height: 300px;
            padding: 15px ;
        `;
            export const ContentInput = styled.div<Propsbutton>`
                width: 40%;
                /* max-width: 100% !important; */
                min-width: 340px;
                background-color: #fff0;
                border: 1px solid ${(props)=>props.active?'#71D98E':'white'};
                border-radius: 5px;
                margin-top: 25px;
                /* min-height: 45px; */
                padding:5px ;
                /* padding-left: 30px;
                padding-right: 30px; */
                display:flex ;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            `;

                export const InputLogin = styled.input`
                    width: 95%;
                    /* height: 100%; */
                    background-color: #fff0;
                    padding: 10px;
                    box-shadow: 0 0 0 0;
                    border: 0 none;
                    outline: 0;
                    :focus {
                        box-shadow: 0 0 0 0;
                        border: 0 none;
                        outline: 0;
                    } 
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 400;
                    font-size: 19px;
                    line-height: 22px;
                    color: white;
                `;
            
            export const ContainerErrorForm = styled.div`
                /* background-color: azure; */
                width: 40%;
                /* padding: 5px; */
                padding-top: 10px;
                padding-bottom: 10px;
                min-width: 340px;
                color: #A52A2A;
                text-align: center;
            `;

            export const ContainerButtonCard = styled.div`
                width: 40%;
                min-width: 340px;
                display:flex ;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            `;
            
                export const ButtonCard = styled.button`
                    width: 100%;
                    padding: 5px;
                    height: 50px;
                    border-radius: 10px;
                    /* padding: 20px; */
                    background-color: #71D98E;
                    display:flex ;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-family: 'Roboto';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 18px;
                    line-height: 21px;
                    color: white;
                    :hover{
                        transform:scale(1.02);
                    }
                    :active {
                        transform: translateY(4px);
                    }
                    :focus {
                        border: none;
                        outline:none;
                        outline-style: none;
                    }
                `;


export const DivisorLogin = styled.div`
    background-color: white;
    height: 100%;
    width:1px ;
    z-index: 7;
`;

export const ContainerLogo = styled.div`
    padding: 15px;
    width:50% ;
    display:flex ;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* background-color: #234; */
`;
    
    export const ContentLogo = styled.div`
        display:flex ;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `;
    
    export const TextoLogoLogin = styled.p`
        color: white;
        font-size:90px ;
        margin-left: 10px;
    `;

    export const LogoLogin = styled.div`
        padding: 5px;
        display:flex ;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `;
    
        export const LogoSistemaEstoque = styled(Image)`
        `;
