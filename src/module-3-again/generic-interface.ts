// make a generic interface

interface CrushInterface <T,U=undefined> {
    name: string,
    husband: T ,
    wife?: U
}

const crush1:CrushInterface<string,string> = {
    name : "Nishat",
    husband: "Sifat",
    wife : 'Jani na'
}