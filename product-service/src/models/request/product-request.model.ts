export interface ProductQueryParams {
  category: string,
  sub_category: string,
  page_offset: string,
  page_limit: string,
  search_term: string,
  min_price: string,
  max_price: string,
  sort_by: SortBy,
  sort_order: SortOrder,
  filter: string
}

export enum SortBy {
  PRICE = 'PRICE',
  RATING = 'RATING'
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC'
}
