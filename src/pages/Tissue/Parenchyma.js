import tissueParenchyma from "../../images/tissueParenchyma.jpg"
import tissueParenchymaChlorenchyma from "../../images/tissueParenchymaChlorenchyma.png"
import tissueParenchymaAerenchyma from "../../images/tissueParenchymaAerenchyma.png"

const parenchymaMarkdown = `
# Parenchyma

เป็นเนื้อเยื่อถาวรเชิงเดี่ยว ประกอบด้วย Parenchyma Cell ซึ่งเป็นเซลล์พื้นทั่วๆ ไป และพบมากที่สุดในพืชโดยเฉพาะส่วนที่อ่อนนุ่มและอมน้ำได้มาก เช่น ในชั้น Cortex และ Pith ของรากและลำต้น
Parenchyma cell เป็นเซลล์ที่ยังมีชีวิตอยู่ มีรูปร่างหลายแบบ แต่ส่วนใหญ่ทรงกระบอกกลม หรือทรงกระบอกเหลี่ยมด้านเท่า อาจกลมรี มี cell wall บางๆ เมื่ออยู่รวมกันจะเกิดช่องว่าง ช่องว่างที่เกิดจากการเรียงตัวกันของ Parenchyma
เรียก intercellular space
![Parenchyma](tissueParenchyma)

* Parenchyma ที่มีคลอโรพลาสต์อยู่ในเซลล์ เรียก Chlorenchyma ซึ่งสามารถสังเคราะห์แสงได้
  ![Chlorenchyma](tissueParenchymaChlorenchyma)

* Parenchyma ที่ทำหน้าที่เกี่ยวข้องกับการสะสมอากาศ เรียก Aerenchyma พบโดยเฉพาะในพืชน้ำ
  ![Aerenchyma](tissueParenchymaAerenchyma)

Parenchyma สามารถแปรสภาพเป็นเนื้อเยื่อเจริญได้เมื่อถูกกระตุ้น เช่น เมื่อเกิดบาดแผลจะทำการแบ่งเซลล์เพื่อสมานบาดแผล

## บริเวณที่พบ

พบอยู่ทั่วไปในพืช เป็นเนื้อเยื่อพื้น (Ground tissue)

## หน้าที่ Parenchyma

ช่วยสังเคราะห์แสง สะสมอาหาร (พวกแป้ง โปรตีน และไขมัน ) น้ำ สร้างน้ำมันที่มีกลิ่นหอมหรืออื่น ๆ บางส่วนช่วยทำหน้าที่หายใจ
`;

const parenchymaData = {
  markdown: parenchymaMarkdown,
  images: {
      tissueParenchyma,
      tissueParenchymaChlorenchyma,
      tissueParenchymaAerenchyma
  }
};

export default parenchymaData;
