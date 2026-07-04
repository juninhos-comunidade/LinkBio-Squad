export type BadgeStatus = "conquistada" | "em_progresso" | "bloqueada";

export interface Badge {
  id: string;
  name: string;
  description: string;
  status: BadgeStatus;
  progress?: {
    current: number;
    total: number;
    label: string;
  };
}

export const badgesMock: Badge[] = [
  {
    id: "1",
    name: "Bem-vindo ao Squad",
    description: "Cadastrou-se na plataforma",
    status: "conquistada",
  },
  {
    id: "2",
    name: "Perfil Completo",
    description: "Preencheu todas as informações do perfil",
    status: "conquistada",
  },
  {
    id: "3",
    name: "Primeiro Link",
    description: "Adicionou o primeiro link",
    status: "conquistada",
  },
  {
    id: "4",
    name: "Colecionador",
    description: "Adicionou 5 ou mais links",
    status: "em_progresso",
    progress: {
      current: 3,
      total: 5,
      label: "3 de 5 links adicionados",
    },
  },
  {
    id: "5",
    name: "Full Stack",
    description: "Cadastrou 5 ou mais tecnologias na stack",
    status: "em_progresso",
    progress: {
      current: 4,
      total: 5,
      label: "4 de 5 tecnologias cadastradas",
    },
  },
  {
    id: "6",
    name: "Identidade Própria",
    description: "Personalizou a cor de destaque do perfil",
    status: "bloqueada",
  },
  {
    id: "7",
    name: "Em Evidência",
    description: "Perfil visualizado 50 vezes",
    status: "bloqueada",
  },
  {
    id: "8",
    name: "Membro Destaque",
    description: "Conquistou todas as outras badges",
    status: "bloqueada",
  },
];
