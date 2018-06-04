import tissueCortexStructure from "../../images/tissueCortexStructure.jpg";
import tissuePericycleLateralRoot from "../../images/tissuePericycleLateralRoot.jpg";

const pericycleMarkdown = `
# Pericycle

เป็นเซลล์ผนังบางขนาดเล็ก มีความหนาเพียง 1-2 ชั้นของเซลล์ ในพืชบางชนิดสังเกตเห็นได้ง่ายแต่บางชนิดสังเกตเห็นได้ยาก เซลล์ในชั้นนี้อาจจะแปรสภาพกลับกลายเป็นเนื้อเยื่อเจริญ

![Structure](tissueCortexStructure)

## บริเวณที่พบ

เป็นเนื้อเยื่อที่อยู่ถัดจาก [Endodermis](#/tissue/cortex) เข้าไป อยู่นอกสุดของชั้น [Stele](#/tissue/stele) พบเฉพาะในราก

## หน้าที่ Pericycle

แบ่งเซลล์ให้เกิดเป็นรากแขนง (Lateral root) และในรากที่มีอายุมากขึ้นอาจจะเปลี่ยนแปลงไปเป็น [Vascular cambium](#/tissue/vascular-cambium) และ [Cork cambium](#/tissue/cork-cambium)

![Lateral root](tissuePericycleLateralRoot)
`;

const pericycleData = {
  markdown: pericycleMarkdown,
  images: {
    tissueCortexStructure,
    tissuePericycleLateralRoot
  }
};

export default pericycleData;
