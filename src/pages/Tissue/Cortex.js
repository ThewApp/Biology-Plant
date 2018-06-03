import tissueCortexStructure from "../../images/tissueCortexStructure.jpg";
import tissueCortexEndodermis from "../../images/tissueCortexEndodermis.gif";

const cortexMarkdown = `
# Cortex

เป็นอาณาเขตระหว่างชั้น [Epidermis](#/tissue/epidermis) และ [Stele](#/tissue/stele) ประกอบด้วยเนื้อเยื่อ

* [Parenchyma](#/tissue/parenchyma) ทำหน้าที่สะสมน้ำและอาหารเป็นส่วนใหญ่

และพบเนื้อเยื่ออื่นๆ เช่น

* [Collenchyma](#/tissue/collenchyma) เพิ่มความแข็งแรงให้แก่ลำต้น
* [Sclerenchyma](#/tissue/sclerenchyma) ให้ความแข็งแรงแก่ลำต้น

![Cortex structure](tissueCortexStructure)

### ในราก
ในรากชั้นในสุดของ Cortex จะเห็นเป็นเซลล์เรียงแถวเดียวเรียก เอนโดเดอร์มิส (Endodermis) ซึ่งจะมีสารซูเบอรินมาสะสมเป็นแถบเรียกแถบ แคสพาเรียนสตริพ (Casparian strip) เมื่ออายุมากขึ้นจะมีลิกนินมาสะสมเพิ่ม เห็นชัดเจนในพืชใบเลี้ยงเดี่ยว แต่จะมีบางช่วงที่เซลล์มีผนังบางแทรกอยู่ในชั้นนี้และจะเป็นบริเวณที่อยู่ตรงกับแนวของ [Xylem](#/tissue/xylem)
![Endodermis](tissueCortexEndodermis)

โดยในรากชั้น Cortex จะกว้างกว่าชั้น Cortex ของลำต้น
`;

const cortexData = {
  markdown: cortexMarkdown,
  images: {
    tissueCortexStructure,
    tissueCortexEndodermis
  }
};

export default cortexData;
