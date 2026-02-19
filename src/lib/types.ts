export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  fileType: "pdf" | "jpg" | "html";
}

export interface ResourceCategory {
  id: string;
  label: string;
  icon: string;
  resources: Resource[];
}

export interface DailyEmailMonth {
  month: string;
  url: string;
}

export interface DailyEmailYear {
  year: number;
  months: DailyEmailMonth[];
}

export interface SpecialCollection {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
}

export interface GemachEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  location: string;
  phone: string;
}

export interface GemachCategory {
  id: string;
  label: string;
}

export interface GemachLocation {
  id: string;
  label: string;
}
