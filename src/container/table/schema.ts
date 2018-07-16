/*
  USE_DT	사용일자
  BUS_ROUTE_ID	노선 ID
  BUS_ROUTE_NO	노선번호
  BUS_ROUTE_NM	노선명
  SSNT_BSST_ID	표준 버스정류장 ID
  BSST_ARS_NO	버스정류장 ARS 번호
  BUS_STA_ID	역 ID
  BUS_STA_NM	역명
  RIDE_PASGR_NUM	총 승차 승객수
  ALIGHT_PASGER_NUM	총 하차 승객 수
  WORK_DT	등록일
*/

const schema = [
  {
    id: 1,
    header: {
      cell: '사용일자',
    },
    body: {
      cell: 'USE_DT',
    },
  },
  {
    id: 2,
    header: {
      cell: '노선 ID',
    },
    body: {
      cell: 'BUS_ROUTE_ID',
    },
  },
  {
    id: 3,
    header: {
      cell: '노선번호',
    },
    body: {
      cell: 'BUS_ROUTE_NO',
    },
  },
  {
    id: 4,
    header: {
      cell: '노선명',
    },
    body: {
      cell: 'BUS_ROUTE_NM',
    },
  },
  {
    id: 5,
    header: {
      cell: '표준 버스정류장 ID',
    },
    body: {
      cell: 'STND_BSST_ID',
    },
  },
  {
    id: 6,
    header: {
      cell: '버스정류장 ARS 번호',
    },
    body: {
      cell: 'BSST_ARS_NO',
    },
  },
  {
    id: 7,
    header: {
      cell: '역 ID',
    },
    body: {
      cell: 'BUS_STA_ID',
    },
  },
  {
    id: 8,
    header: {
      cell: '역명',
    },
    body: {
      cell: 'BUS_STA_NM',
    },
  },
  {
    id: 9,
    header: {
      cell: '총 승차 승객수',
    },
    body: {
      cell: 'RIDE_PASGR_NUM',
    },
  },
  {
    id: 10,
    header: {
      cell: '총 하차 승객 수',
    },
    body: {
      cell: 'ALIGHT_PASGER_NUM',
    },
  },
  {
    id: 11,
    header: {
      cell: '등록일',
    },
    body: {
      cell: 'WORK_DT',
    },
  },
];

export default schema;
