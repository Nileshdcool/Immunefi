export type Report = {
    id: number;
    status: string;
    type: string;
    severity: string;
    title: string;
    createdAt: string;
    project: {
      id: number;
      name: string;
    };
    user: {
      id: number;
      email: string;
    };
  };
  
  export type Reports = Report[];
  
  export type Meta = {
    page: number;
    totalPages: number;
  };
  
  export type ReportsResponse = {
    reports: Reports;
    meta: Meta;
  };

