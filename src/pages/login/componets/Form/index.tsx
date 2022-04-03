import React, { useState } from 'react';

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

    const setarColorBorder = (label: String):any=>{
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
                <ContentCardLogin>

                    <ContentInput onClick={()=>setarColorBorder('email')} active={colorBorder[0].active}>
                        <InputLogin
                            placeholder='Email'
                        />
                    </ContentInput>

                    <ContentInput onClick={()=>setarColorBorder('senha')} active={colorBorder[1].active}>
                        <InputLogin
                            placeholder='Senha'
                        />
                    </ContentInput>

                    <ContainerButtonCard>
                        <ButtonCard>
                            ENTRAR
                        </ButtonCard>
                    </ContainerButtonCard>
                </ContentCardLogin>
            </ContainerCard>


          </ContainerLogin>
      </Container>
  );
}

export default Form;