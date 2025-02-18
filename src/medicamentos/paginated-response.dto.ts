// paginated-response.dto.ts
export class PaginatedResponseDto<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
  
    constructor(count: number, results: T[], baseUrl: string, offset: number, limit: number) {
      this.count = count;
      this.results = results;
  
      this.next = offset + limit < count ? `${baseUrl}/medicamentos?offset=${offset + limit}&limit=${limit}` : null;
      this.previous = offset > 0 ? `${baseUrl}/medicamentos?offset=${Math.max(0, offset - limit)}&limit=${limit}` : null;
    }
  }
  