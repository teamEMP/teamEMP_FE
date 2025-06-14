import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 8.5px 0px 8.5px;
    gap: 16px;
`;
export const Title = styled.h2`
  color: #474A52;
  font-family: Pretendard-SemiBold;
  font-size: 16px;
`;

export const Content = styled.p`
  margin-top: 4px;
  color: var(--greyscale-600, #686B73);
  font-family: Pretendard-Regular;
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
`;

export const AddText = styled.div`
  color: #767b89;
  font-family:"Pretendard-Semibold";
  font-size: 10px;
  line-height: normal;
`;

export const InputField = styled.textarea`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  // line-height: 31px;
  line-height: 1.5;
  border: none;
  border-bottom: 0.5px solid #999;
  margin-bottom: 16px;
  background-attachment: local;
  background-image:
    linear-gradient(to right, white 5px, transparent 5px),
    linear-gradient(to left, white 5px, transparent 5px),
    repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
  font-family: Pretendard-Regular;
  font-size: 13px;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: none;
  }
`;

export const Input = styled.input`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  text-alighn:center;
  border: none;
  border-bottom: 0.5px solid #999;
`;

export const Wrapper = styled.div`
  width: calc(50% - 8px);
`;

export const Text = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 6px;
  gap: 6px;
`;

export const TimeCheckboxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // max-width: 300px;
  margin: 8px 0 16px;
  gap: 33px;
`;

export const CheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #474a52;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1.5px solid #999;
  background: ${({ checked }) => (checked ? '#6EC3C7' : 'transparent')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: white;
`;