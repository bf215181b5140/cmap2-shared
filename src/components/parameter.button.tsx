import styled, { css } from 'styled-components';
import colors from '../colors.json';
import { ButtonDto, ButtonImageOrientation, ButtonStyleDto } from '../index';

export const URL = process.env.NODE_ENV === 'production' ? 'https://changemyavatarparams.com' : 'http://localhost:8080';

interface ParameterButtonProps {
    button: ButtonDto;
    buttonStyle: ButtonStyleDto;
    active?: boolean;
    disabled?: boolean;
    onClick?: (id: string) => void;
    flexBasis?: string;
}

export default function ParameterButton(props: ParameterButtonProps) {

    function onClick(id: string) {
        if (!props.active && props.onClick) props.onClick(id);
    }

    return (<ParameterButtonStyled flexBasis={props.flexBasis} active={props.active || props.disabled} className={props.buttonStyle.className}
                                   onClick={() => onClick(props.button.id)} >
        {props.button.image && <ParameterButtonPicture src={URL + '/' + props.button.image} imageOrientation={props.button.imageOrientation} />}
        {props.button.label && <ParameterButtonLabel>{props.button.label}</ParameterButtonLabel>}
    </ParameterButtonStyled>);
}

function imageOrientationToAspectRatio(imageOrientation: ButtonImageOrientation): string {
    switch(imageOrientation) {
        case ButtonImageOrientation.Square:
            return '4/3'
        case ButtonImageOrientation.Vertical:
            return '9/16'
        case ButtonImageOrientation.Horizontal:
        default:
            return '16/9'
    }
}

const ParameterButtonStyled = styled.div<{ flexBasis?: string, active: boolean }>`
  flex-basis: ${props => props.flexBasis ? props.flexBasis : '100%'};
  align-self: flex-start;
  text-align: center;
  padding: 0;
  min-height: 4.5em;
  min-width: 180px;
  cursor: pointer;
  overflow: hidden;
  
  &.buttonStyle-1 {
  background: ${colors['button-bg']};
  border: 2px solid ${colors['button-border']};
  border-radius: 8px;
  transition: 0.2s linear;
    
      :hover {
        transform: scale(1.02) perspective(1px);
        background: ${colors['button-hover-bg']};
        border: 2px solid ${colors['button-hover-border']};
      }
  }
    
  &.buttonStyle-2 {
  background: ${colors['button-2-bg']};
  border: 2px solid ${colors['button-2-border']};
  border-radius: 8px;
  transition: 0.2s linear;
    
      :hover {
        transform: scale(1.02) perspective(1px);
        background: ${colors['button-2-hover-bg']};
        border: 2px solid ${colors['button-2-hover-border']};
      }
  }
    
  ${props => props.active ? activeParamStyle : null};
`;

const activeParamStyle = css`
  pointer-events: none;
  cursor: initial;
  filter: saturate(0.5%);
`;

const ParameterButtonLabel = styled.div`
  padding: 1.5em;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParameterButtonPicture = styled.div<{ src: string, imageOrientation: ButtonImageOrientation }>`
  width: 100%;
  aspect-ratio: ${props => imageOrientationToAspectRatio(props.imageOrientation)};
  margin: 0;
  padding: 0;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;
