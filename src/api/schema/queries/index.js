import { gql } from 'graphql-tag';

export const approvedBrands = gql`
    query GetApprovedBrands(
      $orderBy: ApprovedBrandOrderByInput
      $value: String
      $first: Int
      $skip: Int
    ) {
      approvedBrands(
        orderBy: $orderBy
        first: $first
        skip: $skip
        where: { name_contains: $value }
      ) {
        id
        description
        name
        icon {
          url
        }
        path
        featured
      }
    }
  `
export const approvedBrandDetails = gql`
    query getApprovedBrandDetails($id: ID) {
      approvedBrand(where: { id: $id }) {
        id
        name
        descriptionSmall
        description
        subTitle
        instructions
        shopLink
        icon {
          url
        }
        linking {
          ... on Category {
            name
          }
        }
      }
    }
  `
export const brands = gql`
query GetBrands(
  $orderBy: BrandOrderByInput
  $value: String
  $first: Int
  $skip: Int
) {
  brands(
    orderBy: $orderBy
    first: $first
    skip: $skip
    where: { name_contains: $value }
  ) {
    id
    subTitle
    name
    path
    icon {
      url
    }
  }
}
`
export const brandDetailsById = gql`
    query getBrands($id: ID) {
      brand(where: { id: $id }) {
        id
        name
        descriptionSmall
        description
        subTitle
        proofLinks
        instructions
        icon {
          url
        }
        linking {
          ... on Category {
            name
          }
        }
        alternativeLinks {
          ... on ApprovedBrand {
            id
            name
            icon{
              url
            }
          }
        }
      }
    }
  `
export const categories = gql`
    query getCategories {
      categories(first: 100, orderBy: createdAt_DESC) {
        id
        name
        icon {
          url
        }
      }
    }
  `
export const exploreCategoriesByName = gql`
    query exploreCategories(
      $categoryName: String!
      $first: Int
      $value: String
    ) {
      brands(
        first: $first
        where: {
          linking_some: { Category: { name: $categoryName } }
          _search: $value
        }
      ) {
        id
        name
        subTitle
        icon {
          url
        }
      }
    }
  `
export const exploreApprovedCategories = gql`
    query exploreApprovedCategories($categoryId: ID) {
      category(where: { id: $categoryId }) {
        approvedBrands {
          name
          id
          icon {
            url
          }
        }
      }
    }
  `
export const getPeopleCategories = gql`
    query peopleCategories {
      peopleCategories {
        title
        id
      }
    }
  `
export const getCategoryPeoples = gql`
    query categoryPeoples($id: ID) {
      peopleCategory(where: { id: $id }) {
        title
        peoples {
          id
          name
          dateOfBirth
          detail
          description
          facebookUrl
          instagramUrl
          twitterUrl  
          profileUrl
          profilePhoto {
            id
            url
            fileName
          }
          peopleCategory {
            title
          }
        }
      }
    }
  `
export const getCelebrity = gql`
    query getCelebrity($id: ID) {
      people(where: { id: $id }) {
        name
        id
        detail
        description
        dateOfBirth
        height
        profileUrl 
        profilePhoto {
          id
          url
          fileName
        } 
        proofLinks
        facebookUrl
        instagramUrl
        twitterUrl
      }
    }
  `
export const getPeople = gql`
    query getPeople($value: String, $first: Int) {
      peoples(
        orderBy: createdAt_DESC
        skip: 0
        first: $first
        where: { _search: $value }
      ) {
        name
        dateOfBirth
        detail
        description
        profileUrl
        profilePhoto {
          id
          url
          fileName
        }
        peopleCategory {
          title
        }
      }
    }
  `
export const brandsNearMe = gql`
    query brandsNearMe(
      $orderBy: BrandOrderByInput
      $latitude: Float!
      $longitude: Float!
      $first: Int
      $skip: Int
    ) {
      brands(orderBy: $orderBy, first: $first, skip: $skip) {
        id
        description
        name
        icon {
          url
        }
        path
        gps {
          distance(from: { latitude: $latitude, longitude: $longitude })
        }
      }
    }
  `
export const scanBrands = gql`
query getScannedBrands($name: String, $brand: String, $barcode: [Float!]) {
  brands(
    orderBy: createdAt_ASC
    first: 100000
    where: {
      OR: [
        { barcodes_contains_some: $barcode }
        { name_contains: $name }
        { description_contains: $brand }
        { subTitle_contains: $brand }
        { descriptionSmall_contains: $brand }
        { path_contains: $brand }
      ]
    }
  ) {
    id
    barcodes
    description
    name
    icon {
      url
    }
    path
  }
}

  `
export const brandCount = gql`
    query getBrandCount {
      brandsConnection {
        aggregate {
          count
        }
      }
    }
  `
export const approvedBrandCount = gql`
    query getApprovedBrandCount {
      approvedBrandsConnection {
        aggregate {
          count
        }
      }
    }
  `
