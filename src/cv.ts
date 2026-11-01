/**
 * The CV, as data.
 *
 * The About page renders this as a one-page summary, and the Experience and
 * Education pages render the same entries in full. Keeping it here means the
 * two cannot drift apart - edit once, both update.
 *
 * Mirrors public/cv.pdf. When you revise the PDF, revise this.
 */

/** The summary paragraph at the top of the CV. */
export const summary =
  "Spatial Planning and Development Engineer (5-year integrated master's degree from Aristotle University of Thessaloniki, equivalent to MSc) with experience in the preparation, processing and quality control of raster and vector geospatial data using Python, QGIS and ArcGIS Pro. Experienced in the spatial downscaling of gridded emissions data to the road network level, with datasets from 120+ countries, and in documenting deliverables for European research projects. Uses Docker and Linux for reproducible workflows. Native Greek speaker, fluent in English (C2) and basic knowledge of German (A2).";

/** Newest first. */
export const roles = [
  {
    date: 'Jul 2025 - Jul 2026',
    title: 'Research Associate',
    org: 'Urban and Regional Innovation Research Unit (URENIO)',
    points: [
      'Collected and documented European policies regarding the green transition, digital transformation, and regional innovation for EU research project deliverables.',
      'Developed thematic maps and geospatial datasets, performing quality and consistency checks prior to final submission.',
    ],
  },
  {
    date: 'Sep 2021 - Feb 2022',
    title: 'Sector Manager',
    org: 'Hellenic Statistical Authority (ELSTAT)',
    points: [
      'Directed a team of four enumerators during the Greek Population and Housing Census of 2021.',
      'Collected demographic and structural data from 600+ households under strict quality-control protocols.',
    ],
  },
];

export const degrees = [
  {
    date: 'Sep 2020 - Jul 2026',
    title: 'School of Spatial Planning and Development Engineering (Integrated Master, MSc equivalent)',
    org: 'Aristotle University of Thessaloniki (AUTH)',
    body: '',
    points: [
      'Diploma Thesis: Achieved a 10/10 grade on the research of spatial downscaling of road transport emission grid data to road network level using GPS Floating Car Data (FCD) and Python.',
      'Related Coursework: Achieved 10/10 grades in main GIS and spatial analysis modules, such as Geoinformatics Applications, Photogrammetry, Databases, Digital Design, and Urban Planning.',
    ],
  },
];

/** Talks and presentations, newest first. Rendered on About and Experience. */
export const conferences = [
  {
    date: 'Oct 2026',
    title: 'Presenter',
    org: '2nd Scientific Conference on Spatial Planning and Development (ESXSA2026)',
    body: 'Presented the "GRAVEL" road emissions estimation methodology. Spatial downscaling of road emissions by road segment and vehicle category, processing datasets from 120+ countries using an automated Python workflow.',
  },
];

/**
 * No dates on the CV for these; the date column is dropped when empty. Empty
 * for now - the English proficiency certificate lives under Languages, where a
 * reader looking for it will actually be. Both pages hide the heading while
 * this is empty.
 */
export const certifications: { date: string; title: string; org: string }[] = [];

export const languages = [
  { name: 'Greek', level: 'Native speaker' },
  { name: 'English', level: 'C2 (ECPE)' },
  { name: 'German', level: 'A2 (Basic)' },
];

export const interests = [
  {
    title: 'Genealogy Research',
    body: 'Built and maintain a relational family tree of 250+ individuals, resolving identity conflicts through the cross-referencing of civil, military, and refugee records.',
  },
  {
    title: 'Self-Hosted Applications',
    body: 'Maintaining a personal homelab environment of containerised applications, such as automated photograph sync across devices with automated backups. Docker, reverse proxying, Linux administration.',
  },
];

/** The sidebar groups, in the CV's order. */
export const skills = [
  {
    heading: 'Geospatial',
    items: [
      'ArcGIS Pro',
      'QGIS',
      'GDAL/OGR',
      'Leaflet',
      'Coordinate Reference Systems (CRS)',
      'Raster and vector data processing',
      'Viewshed and terrain analysis',
      'WMS/WFS',
      'AutoCAD',
    ],
  },
  {
    heading: 'Remote Sensing',
    items: ['Photogrammetry', 'Agisoft Metashape', 'ERDAS Imagine', '3D Modeling', 'Digital Terrain Models (DTM)'],
  },
  {
    heading: 'Automation & Scripting',
    items: ['Python (NumPy, geopandas, shapely, pyproj, GDAL, scikit-learn, osmnx, arcpy)', 'Data quality control'],
  },
  {
    heading: 'IT & Databases',
    items: ['SQL', 'PostGIS', 'Docker', 'Linux', 'Nginx', 'Git', 'Microsoft Office'],
  },
  // Languages are their own section on the About page rather than a skills
  // group, so they are deliberately absent here.
];

/**
 * Project titles here carry a "Day 5 - Earth: " prefix that means something on
 * the challenge pages and nothing on a CV. Strip it for the summary listings.
 */
export const plainTitle = (title: string) => title.replace(/^Day \d+ - [^:]+:\s*/, '');
