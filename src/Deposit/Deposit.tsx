import styled from 'styled-components'

import { SelectAmount } from './components'
import {
  CloseIcon,
  ArrowIcon,
  InputEditIcon,
  InputIcon1,
  InputIcon2,
  ClockIcon,
} from './icon'

const Card = styled.div`
  width: 600px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.headerTextColor};
  border-radius: ${(props) => props.theme.borderRadius}px;
  padding: 20px 30px 0 30px;
`

const Header = styled.header`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderText = styled.header`
  font-size: 1.7em;
  font-weight: bold;
  color: ${(props) => props.theme.headerTextColor};
`
const HeaderClose = styled.header`
  background-color: ${(props) => props.theme.closeBgColor};
  color: ${(props) => props.theme.headerTextColor};
  width: 25px;
  height: 25px;
  padding: 10px;
  border-radius: ${(props) => props.theme.borderRadius}px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  font-size: 1.5em;
  text-align: center;
`

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 25px;
`

const FormGroup = styled.div`
  font-size: 1em;
  flex: 1;
  text-align: left;
`

const FormGroupDivider = styled.div`
  width: 25px;
  height: 25px;
  margin: 0 15px;

  flex-shrink: 0;
  align-self: flex-end;
  transform: translateY(-1em);
`

const Label = styled.label<{ $group?: boolean }>`
  display: block;

  padding: 0;
  margin: 0;
  border: none;
  background: none;

  margin-bottom: 20px;

  text-align: left;
  font-weight: bold;
  font-size: ${(props) => (props.$group ? '0.8em' : '1em')};
  color: ${(props) => props.theme.labelColor};
`

const InputDisplay = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.inputBgColor};
  padding: 0.6em 0.5em;
  border-radius: ${(props) => props.theme.borderRadius}px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25em;
`
const InputEdit = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.inputBgColor};
  padding: 0.6em 0.5em;
  border-radius: ${(props) => props.theme.borderRadius}px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25em;
`

const InputText = styled.div`
  font-size: 0.9em;
  color: ${(props) => props.theme.contentTextColor};

  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const InputIcon = styled.div`
  width: 1.8em;
  height: 1.8em;
  flex-shrink: 0;

  color: ${(props) => props.theme.contentTextColor};

  display: flex;
  justify-content: center;
  align-items: center;
`

const Warning = styled.div`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius}px;
  padding: 17px;

  background-color: ${(props) => props.theme.inputBgColor};
  color: ${(props) => props.theme.InputText};
  text-align: left;
  font-size: 0.8em;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  span {
    font-weight: bold;
  }
`

const Actions = styled.div`
  width: 100%;
`
const Button = styled.button<{ $active?: boolean }>`
  width: 100%;
  padding: 35px 0;
  font-size: 1.5em;
  font-size: ${(props) => (props.$active ? '1.5em' : '1.3em')};
  font-weight: bold;

  border-radius: ${(props) => props.theme.borderRadius}px;
  border: none;

  background-color: ${(props) =>
    props.$active ? props.theme.headerTextColor : props.theme.backgroundColor};
  color: ${(props) =>
    props.$active ? props.theme.backgroundColor : props.theme.labelColor};
`

const WarningIcon = styled.div`
  width: 30px;
  height: 28px;
  margin-right: 0.5em;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Deposit = () => {
  return (
    <Card>
      <Header>
        <HeaderText>Deposit ATOM</HeaderText>
        <HeaderClose>
          <CloseIcon />
        </HeaderClose>
      </Header>
      <Content>
        <FormRow>
          <FormGroup style={{ maxWidth: '45%' }}>
            <Label $group>From Cosmos Hub</Label>
            <InputDisplay>
              <InputIcon>
                <InputIcon1 />
              </InputIcon>
              <InputText>atom1xy5yserlweooeofnweerm6wwz9a</InputText>
            </InputDisplay>
          </FormGroup>
          <FormGroupDivider>
            <ArrowIcon />
          </FormGroupDivider>
          <FormGroup style={{ maxWidth: '45%' }}>
            <Label $group>To Osmosis</Label>
            <InputEdit>
              <InputIcon>
                <InputIcon2 />
              </InputIcon>
              <InputText>atom1xy5ysjdejrwekiskkkm6wwz9a</InputText>
              <InputIcon>
                <InputEditIcon />
              </InputIcon>
            </InputEdit>
          </FormGroup>
        </FormRow>
        <FormRow>
          <SelectAmount />
        </FormRow>
        <FormRow>
          <Warning>
            <WarningIcon>
              <ClockIcon />
            </WarningIcon>
            Estimated time: <span> 20 seconds</span>
          </Warning>
        </FormRow>
      </Content>
      <Actions>
        <Button $active>Transfer</Button>
        <Button>Cancel</Button>
      </Actions>
    </Card>
  )
}
