import introduction from '../content/home_content/introduction.md';
import information from '../content/home_content/essential_information.md';
import pregnancy from '../content/home_content/pregnancy.md';
import disease from '../content/home_content/disease.md';
import diseaseCD from '../content/home_content/disease_cd.md';
import surgery from '../content/home_content/surgery_specific.md';
import fertility from '../content/home_content/fertility.md';
import fertilityColectomy from '../content/home_content/fertility_colectomy.md';
import fertilityIleostomy from '../content/home_content/fertility_ileostomy.md';
import fertilityJpouch from '../content/home_content/fertility_jpouch.md';
import fertilityPerianal from '../content/home_content/fertility_perianal.md';
import fertilityResection from '../content/home_content/fertility_resection.md';
import fertilityPGColectomy from '../content/home_content/fertility_pg_colectomy.md';
import fertilityPGIleostomy from '../content/home_content/fertility_pg_ileostomy.md';
import fertilityPGJpouch from '../content/home_content/fertility_pg_jpouch.md';
import fertilityPGPerianal from '../content/home_content/fertility_pg_perianal.md';
import fertilityPGResection from '../content/home_content/fertility_pg_resection.md';
import contraception from '../content/home_content/contraception.md';
import inheritance from '../content/home_content/inheritance.md';
import medication from '../content/home_content/medication.md';
import medicationList from '../content/home_content/medications/medication_list.md';
import medicationQA1After from '../content/home_content/medications/medication_qa1_after.md';
import medicationQA1Before from '../content/home_content/medications/medication_qa1_before.md';
import medicationQA2Before from '../content/home_content/medications/medication_qa2_before.md';
import medicationQA3Before from '../content/home_content/medications/medication_qa3_before.md';
import medicationInformation from '../content/home_content/medications/medication_information.md';
import surgeries from '../content/home_content/surgery_specifics.md';
import delivery from '../content/home_content/delivery.md';
import deliveryIleostomy from '../content/home_content/delivery_ileostomy.md';
import deliveryJpouch from '../content/home_content/delivery_jpouch.md';
import deliveryPerianal from '../content/home_content/delivery_perianal.md';
import deliveryResection from '../content/home_content/delivery_resection.md';
import breastfeeding from '../content/home_content/breastfeeding.md';
import nutrition from '../content/home_content/nutrition.md';
import substanceUse from '../content/home_content/substance_use.md';
import infants from '../content/home_content/infants.md';
import colectomy from '../content/home_content/definitiions/colectomy.md';
import crohnsDisease from '../content/home_content/definitiions/crohns_disease.md';
import definedTerm from '../content/home_content/definitiions/defined_term.md';
import ilealResection from '../content/home_content/definitiions/ileal_resection.md';
import jpColostomy from '../content/home_content/definitiions/jp_colostomy.md';
import jpouch from '../content/home_content/definitiions/jpouch.md';
import preconception from '../content/home_content/definitiions/preconception.md';
import ulcerativeColitis from '../content/home_content/definitiions/ulcerative_colitis.md';
// import medicationMTX from '../content/home_content/medications/medication_mtx.md';
// import medicationBiologic from '../content/home_content/medications/medication_biologic.md';
// import summary from '../content/home_content/summary.md';

const menuItems = {
  introduction: { file: introduction },
  information: {
    file: information,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
    helpfulBottom: true,
  },
  pregnancy: {
    sectionTitle: 'questions',
    file: pregnancy,
    required: true,
    form: {
      key: 'pregnancy',
      options: ['pregnant', 'preconception'],
    },
  },
  disease: {
    file: disease,
    required: true,
    form: {
      key: 'disease',
      options: ['ulcerative', 'crohns', 'notSure'],
      crohns: {
        file: diseaseCD,
        key: 'perianal',
        options: ['yes', 'no', 'notSure'],
        dismiss: 'no',
      },
    },
  },
  surgery: {
    file: surgery,
    required: true,
    form: {
      key: 'surgery',
      options: ['jPouch', 'colostomy', 'colectomy', 'ileal', 'noSurgeries'],
      deselectAll: 'noSurgeries',
      multiSelect: true,
    },
  },
  // value_survey: {
  //   file: valuesSurvey,
  //   required: true,
  //   form: {
  //     formType: 'surveyForm',
  //   },
  //   helpfulBottom: true,
  // },
  fertility: {
    file: fertility,
    sectionTitle: 'preconception',
  },
  contraception: {
    file: contraception,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  inheritance: {
    file: inheritance,
    sectionTitle: 'pregnancy',
    helpfulBottom: true,
  },
  medication: {
    file: medication,
    internalPages: {
      medicationP1: {
        file: medicationList,
        form: {
          formType: 'medicineForm',
          type: 'selectionList',
          list: [{
            title: 'aminosalicylates',
            options: ['no', 'sulfasalazine', 'otherAminosalicylates'],
          }, {
            title: 'methotrexate',
            options: ['no', 'yes'],
          }, {
            title: 'allopurinol',
            options: ['no', 'yes'],
          }, {
            title: 'thiopurinesIncluding',
            options: ['no', 'yes'],
          }, {
            title: 'biologics',
            options: ['no', 'antiTnfs', 'vedolizumab', 'ustekinumab'],
          }, {
            title: 'smallMolecules',
            options: ['no', 'yes'],
          }, {
            title: 'antibiotics',
            options: ['no', 'ciprofloxacin', 'metronidazole', 'vancomycin'],
          }, {
            title: 'steriods',
            options: ['no', 'prednisone', 'budesonide', 'intravenous'],
          }],
        },
      },
      // medicationP2: {
      //   file: medicationMTX,
      //   form: {
      //     key: 'medicationMTX',
      //     options: ['no', 'yes'],
      //   },
      // },
      // medicationP3: {
      //   file: medicationBiologic,
      //   form: {
      //     key: 'medicationBiologic',
      //     options: ['no', 'yes'],
      //   },
      // },
      medicationP4: {
        file: medicationQA1Before,
        form: {
          formType: 'medicineForm',
          type: 'surveyForm',
          childForms: [
            {
              key: 'medicationSafe',
              titleLeft: 'notSafe',
              titleRight: 'safe',
            },
            {
              key: 'medicationConcerned',
              file: medicationQA2Before,
              titleLeft: 'notConcerned',
              titleRight: 'concerned',
            },
            {
              key: 'medicationContinue',
              file: medicationQA3Before,
              titleLeft: 'continue',
              titleRight: 'discontinue',
            },
          ],
        },
      },
      medicationP5: {
        file: medicationInformation,
      },
      medicationP6: {
        file: medicationQA1After,
        form: {
          formType: 'medicineForm',
          type: 'surveyForm',
          childForms: [
            {
              key: 'medicationSafeAfter',
              titleLeft: 'notSafe',
              titleRight: 'safe',
            },
            {
              key: 'medicationConcernedAfter',
              file: medicationQA2Before,
              titleLeft: 'notConcerned',
              titleRight: 'concerned',
            },
            {
              key: 'medicationContinueAfter',
              file: medicationQA3Before,
              titleLeft: 'continue',
              titleRight: 'discontinue',
            },
          ],
        },
      },
    },
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
    helpfulBottom: true,
  },
  surgeries: {
    file: surgeries,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  delivery: {
    file: delivery,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  breastfeeding: {
    file: breastfeeding,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  nutrition: {
    file: nutrition,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  substance_use: {
    file: substanceUse,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  infants: {
    file: infants,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  // summary: {
  //   file: summary,
  //   helpfulBottom: true,
  //   references: [
  //     'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
  //     'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
  //   ],
  // },
};

export const definitions = {
  colectomy: {
    file: colectomy,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  crohns: {
    file: crohnsDisease,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  definedTerm: {
    file: definedTerm,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  ileal: {
    file: ilealResection,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  colestomy: {
    file: jpColostomy,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  jpouch: {
    file: jpouch,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  preconception: {
    file: preconception,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
  ulcerative: {
    file: ulcerativeColitis,
    references: [
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
      'http://ipdas.ohri.ca/IPDAS_checklist.pdf',
    ],
  },
};

export function deliveryContent(formData) {
  const contentFiles = [];
  if (formData) {
    if (
      formData.disease && formData.disease.indexOf('crohns') > -1 &&
      formData.perianal && formData.perianal.indexOf('yes') > -1
    ) {
      contentFiles.push(deliveryPerianal);
    }
    if (formData.surgery) {
      if (formData.surgery.indexOf('jPouch') > -1) {
        contentFiles.push(deliveryJpouch);
      }
      if (formData.surgery.indexOf('ileal') > -1) {
        contentFiles.push(deliveryResection);
      }
      if (formData.surgery.indexOf('colostomy') > -1) {
        contentFiles.push(deliveryIleostomy);
      }
    }
  }
  return contentFiles;
}

export function fertilityContent(formData) {
  const contentFiles = [];
  if (formData && formData.pregnancy) {
    const isPG = formData.pregnancy === 'pregnant';
    if (formData.disease) {
      if (
        formData.disease.indexOf('ulcerative') > -1
        && formData.surgery && formData.surgery.indexOf('jPouch') > -1
      ) {
        contentFiles.push(isPG ? fertilityPGJpouch : fertilityJpouch);
      }
      if (
        formData.disease.indexOf('crohns') > -1 &&
        formData.perianal && formData.perianal.indexOf('yes') > -1
      ) {
        contentFiles.push(isPG ? fertilityPGPerianal: fertilityPerianal);
      }
    }
    if (formData.surgery) {
      if (formData.surgery.indexOf('ileal') > -1) {
        contentFiles.push(isPG ? fertilityPGResection : fertilityResection);
      }
      if (formData.surgery.indexOf('colostomy') > -1) {
        contentFiles.push(isPG ? fertilityPGIleostomy : fertilityIleostomy);
      }
      if (formData.surgery.indexOf('colectomy') > -1) {
        contentFiles.push(isPG ? fertilityPGColectomy : fertilityColectomy);
      }
    }
  }
  return contentFiles;
}

export default menuItems;
