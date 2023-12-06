import {
  ApolloClient,
  ApolloError,
  ApolloQueryResult,
  InMemoryCache,
  OperationVariables,
  createHttpLink,
  useLazyQuery,
  useQuery,
} from "@apollo/client";
import { categories, exploreCategoriesByName } from "../schema/queries";
const client = new ApolloClient({
  link: createHttpLink({ uri: 'https://api-eu-west-2.hygraph.com/v2/clolfekda891n01uqbbqrev99/master' }),
  cache: new InMemoryCache(),
});

interface brandsInput {
  orderBy: string;
  value: string;
  first: number;
}

interface ID {
  id: string;
}

interface Response {
  loading?: boolean;
  error?: ApolloError | undefined;
  data?: any;
  pLoad?: boolean;
  pError?: ApolloError | undefined;
  pData?: any;
  refetch?: (
    variables?: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<any>> | undefined;
}

// Approved brands

export function useApprovedBrands(props: any): Response {
  try {
    let { orderBy, value, first, skip } = props;
    const { loading, error, data, refetch } = useQuery(schema.approvedBrands, {
      variables: {
        orderBy,
        first,
        skip,
        ...(value && value.length > 2 ? { value } : { value: "" }), // Only include value if it meets certain criteria
      },
    });

    return { loading, error, data, refetch };
  } catch (err) {
    console.error("Error in useApprovedBrands:", err);
    return { loading: false };
  }
}

export function approvedBrandDetails(props: ID): Response {
  try {
    let { id } = props;
    const { loading, error, data } = useQuery(schema.approvedBrandDetails, {
      variables: { id },
    });
    return { loading, error, data };
  } catch (err) {
    console.log("error", err);
    return { loading: false };
  }
}

// Brands

export function useBrands(props: any): Response {
  try {
    let { orderBy, value, first, skip } = props;
    const { loading, error, data, refetch } = useQuery(schema.brands, {
      variables: {
        orderBy,
        first,
        skip,
        ...(value && value.length > 2 ? { value } : { value: "" }), // Only include value if it meets certain criteria
      },
    });

    return { loading, error, data, refetch };
  } catch (err) {
    console.error("Error in useBrands:", err);
    return { loading: false };
  }
}

export function brandDetails(props: ID): Response {
  try {
    let { id } = props;
    const { loading, error, data } = useQuery(schema.brandDetails, {
      variables: { id },
    });
    return { loading, error, data };
  } catch (err) {
    getCategoryPeoples;
    console.log("error", err);
    return { loading: false };
  }
}
export function getCategories() {
  const { loading, error, data } = useQuery(categories);

  if (loading) {
    // Loading state
    return { loading: true, error: null, data: null };
  }

  if (error) {
    // Error state
    // console.error('GraphQL error:', error);
    return { loading: false, error: 'An error occurred while fetching categoriesData', data: null };
  }

  // Data state
  // console.log('GraphQL categoriesData:', data);
  return { loading: false, error: null, categoriesData: data };
}

// export function getCategories(): Response {

//   try {
//     const data = useQuery(categories);
//     console.log(data.data)
//     return data
//   } catch (err) {
//     console.log("error", err);
//     return { loading: false };
//   }
// }

export async function getCategoriesByName(categoryName: any) {
  console.log('cnsdkbcs', categoryName)
  try {
    const data = await client.query(
      {
        query: exploreCategoriesByName,
        variables: { categoryName },
      });
    console.log(data)
    return { detailedCatergoryLoading: false, detailedCatergoryerror: null, detailedCatergoryData: data };
  } catch (err) {
    console.log("error", err);
    return { detailedCatergoryLoading: false };
  }
}
export function exploreApprovedCategories(categoryId: string): Response {
  try {
    const { loading, error, data, refetch } = useQuery(
      schema.exploreApprovedCategories,
      {
        variables: {
          categoryId,
        },
      }
    );
    return { loading, error, data, refetch };
  } catch (err) {
    console.log("error", err);
    return { loading: false };
  }
}

export function getPeopleCategories(): Response {
  try {
    const { loading, error, data } = useQuery(schema.getPeopleCategories);
    return { loading, error, data };
  } catch (err) {
    console.log("error", err);
    return { loading: false };
  }
}

export function getCategoryPeoples(props: ID): Response {
  try {
    let { id } = props;
    const { loading, error, data, refetch } = useQuery(
      schema.getCategoryPeoples,
      {
        variables: {
          id,
        },
      }
    );
    return { loading, error, data, refetch };
  } catch (err) {
    console.log("error", err);
    return { loading: false };
  }
}

export function getCelebrity(props: ID): Response {
  try {
    let { id } = props;
    const { loading, error, data } = useQuery(schema.getCelebrity, {
      variables: {
        id,
      },
    });
    return { loading, error, data };
  } catch (err) {
    console.log("error", err);
    return { loading: false };
  }
}

export function getPeople({
  value,
  first,
}: {
  value: string;
  first: number;
}): Response {
  try {
    const { loading, error, data, refetch } = useQuery(schema.getPeople, {
      variables: {
        ...(value && value.length > 2 ? { value } : { value: "" }),
        first,
      },
    });
    return { pLoad: loading, pError: error, pData: data, refetch };
  } catch (err) {
    console.log("error", err);
    return { pLoad: false };
  }
}

export function brandsNearMe({
  orderBy,
  latitude,
  longitude,
  first,
  skip,
}: any) {
  try {
    const { loading, error, data, refetch } = useQuery(schema.brandsNearMe, {
      variables: {
        orderBy,
        latitude,
        longitude,
        first,
        skip,
      },
    });

    return { loading, error, data, refetch };
  } catch (err) {
    console.error("Error in useBrands:", err);
    return { loading: false };
  }
}

export function getScannedBrands({ value }: any) {
  try {
    const { loading, error, data, refetch } = useQuery(schema.scanBrands, {
      variables: {
        value,
      },
    });

    return { scanLoading: loading, scanError: error, scanData: data, refetch };
  } catch (err) {
    console.error("Error in useBrands:", err);
    return { loading: false };
  }
}

export function getBrandCount() {
  console.log('i am inside get brands')
  try {
    const { loading, error, data } = useQuery(schema.brandCount);
    return { countLoading: loading, countError: error, countData: data };
  } catch (err) {
    console.log("Error in getBrandCount:", err);
    return { loading: false };
  }
}

export function getApprovedBrandCount() {
  try {
    const { loading, error, data } = useQuery(schema.approvedBrandCount);

    return { countLoading: loading, countError: error, countData: data };
  } catch (err) {
    console.error("Error in getApprovedBrandCount:", err);
    return { loading: false };
  }
}
