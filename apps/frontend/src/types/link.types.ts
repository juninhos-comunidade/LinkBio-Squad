export interface Link {
  id: string;
  userId: string;
  title: string;
  url: string;
  icon?: string;
  order: number;
  active: boolean;
  createdAt: string;
}

export interface CreateLinkDto {
  title: string;
  url: string;
  icon?: string;
}

export interface UpdateLinkDto extends Partial<CreateLinkDto> {
  order?: number;
  active?: boolean;
}
