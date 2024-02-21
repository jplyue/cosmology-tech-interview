import styled from 'styled-components'

import { InputIcon1 } from '../../icon'

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

const LabelRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const LabelDescription = styled.div`
  font-size: 0.8em;
  color: ${(props) => props.theme.contentTextColor};

  span {
    font-weight: bold;
  }
`

const Frame = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: ${(props) => props.theme.borderRadius}px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const FrameLeft = styled.div`
  border-right: 1px solid ${(props) => props.theme.borderColor};
`

const FrameRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;
  padding: 0 32px 0 27px;
`

const FrameRightRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${(props) => props.theme.contentTextColor};

  span {
    font-weight: bold;
    margin-right: 0.5em;
    color: ${(props) => props.theme.headerTextColor};
    font-size: 0.8em;
  }
`

const FrameRightLeft = styled.div`
  font-weight: bold;
  font-size: 1.1em;
`

const IconWrapper = styled.div`
  width: 3.8em;
  height: 3.8em;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8em;
  box-sizing: border-box;
`

const Tags = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 10px;
`

const Tag = styled.div`
  font-size: 0.8em;
  font-weight: bold;
  color: ${(props) => props.theme.labelColor};
  background-color: ${(props) => props.theme.inputBgColor};
  padding: 10px;
  margin-left: 16px;
  border-radius: ${(props) => props.theme.borderRadius}px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.headerTextColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`

const Approx = styled.div`
  color: ${(props) => props.theme.contentTextColor};
  font-weight: normal;
  font-size: 0.8em;
`

export const SelectAmount = () => {
  return (
    <div style={{ width: '100%' }}>
      <LabelRow>
        <Label>Select amount </Label>
        <LabelDescription>
          Available <span>2 ATOM</span>
        </LabelDescription>
      </LabelRow>
      <Frame>
        <FrameLeft>
          <IconWrapper>
            <InputIcon1 />
          </IconWrapper>
        </FrameLeft>
        <FrameRight>
          <FrameRightLeft>2</FrameRightLeft>
          <FrameRightRight>
            <span>ATOM</span>
            <Approx>=$1,013</Approx>
          </FrameRightRight>
        </FrameRight>
      </Frame>
      <Tags>
        <Tag>Max</Tag>
        <Tag>1/2</Tag>
        <Tag>1/3</Tag>
      </Tags>
    </div>
  )
}
