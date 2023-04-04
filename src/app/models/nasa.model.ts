class NasaData {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;

  constructor(
    date: string,
    explanation: string,
    hdurl: string,
    media_type: string,
    service_version: string,
    title: string,
    url: string
  ) {
    this.date = date;
    this.explanation = explanation;
    this.hdurl = hdurl;
    this.media_type = media_type;
    this.service_version = service_version;
    this.title = title;
    this.url = url;
  }
}
export { NasaData };