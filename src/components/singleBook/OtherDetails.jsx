export default function OtherDetails({ data }) {
  return (
    <div className="mt-6 lg:mt-8 space-y-2 text-white font-light">
      <h3 className="font-semibold text-xl">Other Details :</h3>
      <h5>Total number of pages : {data?.pageCount}</h5>
      <h5>Publisher : {data?.publisher}</h5>
      <h5>Published Date : {data?.publishedDate}</h5>
      <h5>Type : {data?.printType}</h5>
    </div>
  );
}
