import { WorkAuthorizationForm } from "../schemas/QSEH/HES/permit-work";

export function mapFormToPrisma(data: Partial<WorkAuthorizationForm>) {
    return {
        ...data.sectionA,
        ...data.sectionB,
        ...data.sectionC,
        ...data.sectionD,
        ...data.sectionE,
        ...data.sectionF,
        issueDate: new Date(data.sectionA?.issueDate),
        activeFromDate: new Date(data.sectionE?.activeFromDate),
        expirationDate: new Date(data.sectionE?.expirationDate),
        phCloseoutTime: data.sectionF?.phCloseoutTime ? data.sectionF.phCloseoutTime : null,
        wsCloseoutTime: data.sectionF?.wsCloseoutTime ? data.sectionF.wsCloseoutTime : null,
    };
}
