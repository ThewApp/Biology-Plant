import tissueVascularCambium from "../../images/tissueVascularCambium.jpg";
import tissueVascularCambiumFunction from "../../images/tissueVascularCambiumFunction.png"
import tissueVascularCambiumAnnualRing from "../../images/tissueVascularCambiumAnnualRing.jpg"

const vascularCambiumMarkdown = `
# Vascular cambium

เกิดจากการเปลี่ยนสภาพมาจากเนื้อเยื่อระหว่าง [Xylem](#/tissue/xylem) ขั้นที่ 1 กับ [Phloem](#/tissue/phloem) ขั้นที่ 1

![Vascular cambium structure](tissueVascularCambium)

## บริเวณที่พบ

ระหว่างเนื้อเยื่อลำเลียงน้ำและแร่ธาตุ (Xylem) และ เนื้อเยื่อลำเลียงอาหาร (Phloem)

## หน้าที่ Vascular Cambium

สร้างท่อลำเลียงระยะทุติยภูมิ (Secondary growth) โดยเซลล์ที่มีการแบ่งเซลล์เข้ามาด้านในลำต้นจะเจริญเป็น Secondary xylem ส่วนเซลล์ที่มีการแบ่งเซลล์ออกด้านนอกของลำต้นจะเจริญเป็น Secondary phloem โดยปกติการแบ่งเซลล์เพื่อสร้าง Secondary xylem จะเกิดขึ้นเร็วกว่า Secondary phloem ดังนั้นจึงพบ Secondary xylem เป็นส่วนหลักของเนื้อไม้

![Vascular cambium function](tissueVascularCambiumFunction)

## Annual ring

วงปี (Annual ring) เป็นส่วนของ secondary xylem สามารถใช้ในการคาดคะเนอายุของไม้ยืนต้นได้ ใน 1 รอบวงปี จะแบ่งออกเป็น 2 ส่วน คือ

1.  Summer wood หรือ Late wood เป็น Secondary xylem ที่เจริญในช่วงที่**น้ำน้อย** เซลล์มีขนาดเล็ก แถบที่เกิดขึ้นจะมีสีเข้มค่อนข้างแคบ
2.  Spring wood หรือ Early wood เป็น Secondary xylem ที่เจริญในช่วงที่**น้ำมาก** เซลล์มีขนาดใหญ้แถบที่เกิดขึ้นจะมีสีจางค่อนข้างกว้าง

![Annual ring](tissueVascularCambiumAnnualRing)
`;

const vascularCambiumData = {
  markdown: vascularCambiumMarkdown,
  images: {
    tissueVascularCambium,
    tissueVascularCambiumFunction,
    tissueVascularCambiumAnnualRing
  }
};

export default vascularCambiumData;
