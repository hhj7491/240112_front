import Button from "./Button";

function Success({ id, tologin }) {
  return (
    <>
      <div className="center">
        <div>{id}</div>
        <Button color="yellow" name="To login" click={tologin}></Button>
      </div>
    </>
  );
}
export default Success;
