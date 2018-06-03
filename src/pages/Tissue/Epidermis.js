import tissueEpidermisCuticle from "../../images/tissueEpidermisCuticle.png"
import tissueEpidermisRootHair from "../../images/tissueEpidermisRootHair.png"

const epidermisMarkdown = `
# Epidermis

เป็นเนื้อเยื่อถาวรเชิงเดี่ยว กำเนิดมาจากชั้น protoderm มักเรียกกันว่า เนื้อเยื่อผิว เมื่อมีการเจริญขั้นที่สอง (secondary growth) เนื้อเยื่อ epidermis จะสลายไป เพราะมีชั้นของ cork ที่เกิดขึ้นใต้ epidermis เจริญดันออกมา

เซลล์เรียงแถวเดียวเบียดกันแน่นไม่มีช่องว่างระหว่างเซลล์ ผนังเซลล์บางด้านนอกมักหนากว่าด้านในเพราะมีสารคิวติน(Cutin)มาเคลือบ ผิวด้านนอกมีสารขี้ผึ้งพวกคิวตินฉาบอยู่ช่วยป้องกันการระเหยของน้ำ เรียกว่า cuticle
![Cutitcle](tissueEpidermisCuticle)

เอพิเดอร์มิสบางเซลล์มีการเปลี่ยนแปลงไปทำหน้าที่พิเศษ เช่น
* เปลี่ยนแปลงไปเป็นเซลล์คุม (Guard cell)
* เปลี่ยนแปลงไปเป็นขนราก (Root hair)
* เปลียนแปลงไปเป็นเซลล์ขน (Trichome)

![Guard cell, Root hair](tissueEpidermisRootHair)

## บริเวณที่พบ

อยู่ชั้นนอกสุดของทุกส่วนของพืชที่มีการเจริญเติบโตในขั้นต้น (primary growth)

## หน้าที่

ช่วยป้องกันอันตรายให้แก่เนื้อเยื่อที่อยู่ภายใน และเสริมความแข็งแรง ช่วยป้องกันการระเหยและการคายน้ำ เกี่ยวกับการคายน้ำแลกเปลี่ยนแก๊ส สะสมน้ำและสารที่ได้จากmetabolism เกี่ยวกับการสังเคราะห์แสง การขับของเสียหรือสร้างเซลล์ใหม่ปกคลุมเมื่อมีบาดแผล ช่วยดูดซึมน้ำและแร่ธาตุ โดยเฉพาะอย่างยิ่งทางขนราก
`

const epidermisData = {
    markdown: epidermisMarkdown,
    images: {
        tissueEpidermisCuticle,
        tissueEpidermisRootHair
    }
}

export default epidermisData;