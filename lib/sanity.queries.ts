import { groq } from 'next-sanity';

export const activeAlertQuery = groq`
  *[_type == "alert" && isActive == true][0] {
    message,
    level,
    link
  }
`;

export const currentTitanQuery = groq`
  *[_type == "employee" && isTitan == true][0] {
    name,
    role,
    achievement,
    "image": image.asset->url,
    revealDate
  }
`;
