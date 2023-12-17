import {
  ApolloClient,
  ApolloError,
  ApolloQueryResult,
  InMemoryCache,
  OperationVariables,
  createHttpLink,
  useLazyQuery,
  useQuery
} from "@apollo/client";
import { approvedBrandDetails, approvedBrands, brandDetailsById, brands, categories, getCategoryPeoples, getCelebrity, getPeople, getPeopleCategories, scanBrands } from "../schema/queries";
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

export function useApprovedBrands(props) {
  try {
    let { orderBy, value, first, skip } = props;
    const { loading, error, data, refetch } = useQuery(approvedBrands, {
      variables: {
        orderBy,
        first,
        skip,
        ...(value && value.length > 2 ? { value } : { value: "" }), // Only include value if it meets certain criteria
      },
    });

    // return { loading, error, data, refetch };
    if (loading) {
      return { brandsLoading: true, brandsError: null, brandsData: null };
    }

    if (error) {
      return { brandsLoading: false, brandsError: 'An error occurred while fetching categoriesData', brandsData: null };
    }

    return { brandsLoading: false, brandsError: null, brandsData: data };
  } catch (err) {
    console.error("Error in useApprovedBrands:", err);
    return { loading: false };
  }
}

export function GetapprovedBrandDetailsById(props) {
  try {
    let id = props.id
    const { loading, error, data } = useQuery(approvedBrandDetails, {
      variables: { id },
    });
    if (loading) {
      return { brandsLoading: true, brandsError: null, brandData: null };
    }
    if (error) {
      return { brandsLoading: false, brandsError: 'An error occurred while fetching categoriesData', brandData: null };
    }
    return { brandsLoading: false, brandsError: null, brandData: data };
  } catch (err) {
    console.log("error", err);
    return { loading: false };
  }

}

// Brands

export function useBrands(props) {
  try {
    let { orderBy, value, first, skip } = props;
    const { loading, error, data, refetch } = useQuery(brands, {
      variables: {
        orderBy,
        first,
        skip,
        ...(value && value.length > 2 ? { value } : { value: "" }), // Only include value if it meets certain criteria
      },
    });
    if (loading) {
      return { brandsLoading: true, brandsError: null, brandsData: null };
    }

    if (error) {
      return { brandsLoading: false, brandsError: 'An error occurred while fetching categoriesData', brandsData: null };
    }

    return { brandsLoading: false, brandsError: null, brandsData: data };
  } catch (err) {
    console.error("Error in useBrands:", err);
    return { brandsLoading: false };
  }
}

export function brandDetails(ID) {
  let id = ID.id
  try {

    const { loading, error, data } = useQuery(brandDetailsById, {
      variables: { id },
    });
    if (loading) {
      return { brandLoading: true, brandError: null, brandData: null };
    }

    if (error) {
      return { brandLoading: false, brandError: 'An error occurred while fetching categoriesData', brandData: null };
    }

    return { brandLoading: false, brandError: null, brandData: data };

  } catch (err) {
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
export function exploreApprovedCategories(categoryId: string): Response {
  try {
    const { isloading, iserror, data, refetch } = useQuery(
      schema.exploreApprovedCategories,
      {
        variables: {
          categoryId,
        },
      }
    );
    return { isloading, iserror, ApprovedData: data, refetch };
  } catch (err) {
    console.log("error", err);
    return { loading: false };
  }
}

export function getTotalPeople() {
  try {
    const { loading, error, data } = useQuery(getPeopleCategories);
    if (loading) {
      // Loading state
      return { loading: true, error: null, peopleCategories: null };
    }

    if (error) {
      // Error state
      // console.error('GraphQL error:', error);
      return { loading: false, error: 'An error occurred while fetching people Categories', peopleCategories: null };
    }

    // Data state
    // console.log('GraphQL categoriesData:', data);
    return { loading: false, error: null, peopleCategories: data };

    // return { loading, error, data };
  } catch (err) {
    console.log("error", err);
    return { loading: false };
  }
}


export function getRandomPeople() {
  try {
    const { loading, error, data, refetch } = useQuery(getPeople, {
      variables: {
        value: "",
        first: 100,
      },
    });
    if (loading) {
      // Loading state
      return { randomPeopleLoading: true, randomPeopleError: null, randomPeople: null };
    }

    if (error) {
      // Error state
      // console.error('GraphQL error:', error);
      return { randomPeopleLoading: false, randomPeopleError: 'An error occurred while fetching people Categories', randomPeople: null };
    }

    // Data state
    return { randomPeopleLoading: false, randomPeopleError: null, randomPeople: data };


    // return { pLoad: loading, pError: error, pData: data, refetch };
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

export function getScannedBrands(props) {
  const { barcode, name } = props
  try {
    const { loading, error, data, refetch } = useQuery(scanBrands, {
      variables: {
        barcode: [6034000005233],
        name: name,
      },
    });
    if (error) {
      console.log('errorerrorerror', error)

    }
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
