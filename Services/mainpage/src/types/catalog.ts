export interface Catalog {
    img?: string,
    title: string
}

interface CatalogTextObject {
    number: string,
    information: string
}

export interface CatalogKey {
    id: number,
    firstInformation: CatalogTextObject,
    secondInformation: CatalogTextObject,
    thirdInformation: CatalogTextObject,
}