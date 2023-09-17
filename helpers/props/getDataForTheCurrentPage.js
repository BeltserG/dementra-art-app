import { useRouter } from "next/router"

function getDataForTheCurrentPage(data){
    const route = useRouter().route;
    let pageTitle = route.slice(route.lastIndexOf("/") + 1)
    return data.filter(section=>section.id === pageTitle)[0]
}
export {getDataForTheCurrentPage}