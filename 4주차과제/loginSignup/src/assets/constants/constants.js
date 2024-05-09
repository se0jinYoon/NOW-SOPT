const SIGNUP_LABEL = [
  { label: 'ID', detailExist: false },
  {
    label: 'PW',
    detailExist: true,
    detail: '비밀번호 형식은 8자이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다.',
  },
  { label: '닉네임', detailExist: false },
  { label: '전화번호', detailExist: true, detail: '전화번호 형식은 010-****-**** 입니다.' },
];

export { SIGNUP_LABEL };
