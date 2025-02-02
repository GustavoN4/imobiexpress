import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 150px;
  display: flex;
  justify-content: space-between;
`;
export const Left = styled.div`
  width: 70%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.6);
`;
export const Thumb = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;
export const Description = styled.div`
  padding: 30px 0;
  h2,
  p {
    margin-bottom: 15px;
    color: var(--cinza);
  }
`;
export const Rigth = styled.div`
  width: 29%;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
`;
export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProfileImg = styled.div`
  width: 115px;
  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;
export const ProfileDescription = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: var(--cinza);
  }
`;
export const ProfileContact = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: var(--cinza);
  }
`;
export const ProfileFormContact = styled.div`
  h3,
  p {
    margin-bottom: 15px;
    color: var(--cinza);
  }
  form {
   display: flex;
   flex-direction: column;
  }
`;
