import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../contexts/UserContext';
import { LoginFormData } from '../../../../types/user';

import {
    Container,
    ContainerLogin,
    ContainerCard,
        ContentCardLogin,
            ContentInput,
                InputLogin,
            ContainerButtonCard,
                ButtonCard,
    DivisorLogin,
    ContainerLogo,
        ContentLogo,
        TextoLogoLogin,
        LogoLogin,
            LogoSistemaEstoque
} from './styles';

function Form() {

    const { loading, loginUser } = useContext(UserContext);

    const [ colorBorder, setColorBorder ] = useState([
        {
            label:'email',
            active: false
        },
        {
            label:'senha',
            active: false
        }
    ]);

    async function onSubmit(data: LoginFormData){
        console.log(data);
        await loginUser(data);
    }

    const { register, handleSubmit } = useForm();

    const setarColorBorder = (label: string)=>{
        switch (label) {
            case 'email':
                colorBorder[0].active = true
                colorBorder[1].active = false
                setColorBorder({...colorBorder})
                break
            case 'senha':
                colorBorder[0].active = false
                colorBorder[1].active = true
                setColorBorder({...colorBorder})
                break
            default:
                break;
        }
    }

  return (
      <Container>
          <ContainerLogin>

            <ContainerLogo>
                <ContentLogo>
                    <LogoLogin>
                        <LogoSistemaEstoque
                            src="/images/logo_sistema_estoque.png"
                            width={100}
                            height={100}
                        />
                    </LogoLogin>
                    <TextoLogoLogin>
                        SCC
                    </TextoLogoLogin>
                </ContentLogo>
            </ContainerLogo>

            <DivisorLogin/>

            <ContainerCard>
                {
                    !loading ?
                    (
                        <ContentCardLogin onSubmit={handleSubmit(onSubmit)}>
        
                            <ContentInput onClick={()=>setarColorBorder('email')} active={colorBorder[0].active}>
                                <InputLogin
                                    placeholder='Email'
                                    type="email"
                                    {...register('email')}
                                />
                            </ContentInput>
        
                            <ContentInput onClick={()=>setarColorBorder('senha')} active={colorBorder[1].active}>
                                <InputLogin
                                    placeholder='Senha'
                                    type="password"
                                    {...register('senha')}
                                />
                            </ContentInput>
        
                            <ContainerButtonCard>
                                <ButtonCard type='submit'>
                                    ENTRAR
                                </ButtonCard>
                            </ContainerButtonCard>
                        </ContentCardLogin>
                    ):
                    (
                        "carregando..."
                    )
                }
            </ContainerCard>


          </ContainerLogin>
      </Container>
  );
}

export default Form;