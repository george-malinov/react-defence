import "./Create.css";
import { useAuth } from "../../Context/AuthContext";
import { db } from "../../Firestore/firebase";
const Create = ({ history }) => {
  const user = useAuth();

  const createSubmitHandler = (e) => {
    e.preventDefault();

    var spellNames = Array.from(e.target.spellName).map((spell) => spell.value);
    var spellCds = Array.from(e.target.spellCd).map((spell) => spell.value);
    var spellDesc = Array.from(e.target.spellDescription).map(
      (spell) => spell.value
    );
    var spellImgUrls = Array.from(e.target.spellImageURL).map(
      (spell) => spell.value
    );
    var spellDmgs = Array.from(e.target.spellDmg).map((spell) => spell.value);

    var newHeroSpells = [
      {
        spellName: spellNames[0],
        spellCd: spellCds[0],
        spellDescription: spellDesc[0],
        spellImageURL: spellImgUrls[0],
        spellDmg: spellDmgs[0],
      },
      {
        spellName: spellNames[1],
        spellCd: spellCds[1],
        spellDescription: spellDesc[1],
        spellImageURL: spellImgUrls[1],
        spellDmg: spellDmgs[1],
      },
      {
        spellName: spellNames[2],
        spellCd: spellCds[2],
        spellDescription: spellDesc[2],
        spellImageURL: spellImgUrls[2],
        spellDmg: spellDmgs[2],
      },
      {
        spellName: spellNames[3],
        spellCd: spellCds[3],
        spellDescription: spellDesc[3],
        spellImageURL: spellImgUrls[3],
        spellDmg: spellDmgs[3],
      },
    ];
    const hero = {
      heroName: e.target.heroName.value,
      heroDescription: e.target.heroDescription.value,
      heroImageURL: e.target.heroImageURL.value,
      heroClass: e.target.heroClass.value,
      createdBy: user.currentUser.email,
      heroSpells: newHeroSpells,
    };
    db.collection("heroes")
      .add(hero)
      .then(() => {
        history.push("/all");
      });
  };

  return (
    <>
      <h2>Create Custom Hero</h2>
      <div className="section-title">
        <h4 className="hero-title">Hero</h4>
        <h4 className="spells-title">Spells</h4>
      </div>

      <form onSubmit={createSubmitHandler}>
        <div className="create-hero">
          <fieldset>
            <p className="field">
              <label htmlFor="heroName">Name</label>
              <span className="input">
                <input
                  type="text"
                  name="heroName"
                  id="heroName"
                  placeholder="Name"
                  required
                />
                <span className="actions"></span>
              </span>
            </p>
            <p className="field">
              <label htmlFor="heroDescription">Description</label>
              <span className="input">
                <textarea
                  rows="3"
                  cols="30"
                  type="text"
                  name="heroDescription"
                  id="heroDescription"
                  placeholder="Description"
                  required
                ></textarea>
              </span>
            </p>
            <p className="field">
              <label htmlFor="heroImageURL">Image</label>
              <span className="input">
                <input
                  type="text"
                  name="heroImageURL"
                  id="heroImageURL"
                  placeholder="Link of your hero Image"
                  required
                />
                <span className="actions"></span>
              </span>
            </p>
            <p className="field">
              <label htmlFor="heroClass">Class</label>
              <span className="input">
                <select required type="text" name="heroClass">
                  <option value="INTELLIGENCE">Intelligence</option>
                  <option value="STRENGTH">Strength</option>
                  <option value="AGILITY">Agility</option>
                </select>
              </span>
            </p>
          </fieldset>
          <fieldset>
            <p className="field">
              <label htmlFor="spellName">Spell Name</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellName"
                  placeholder="Name"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellImageURL">Spell Image</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellImageURL"
                  placeholder="Link of your spell Image"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellCd">Cooldown</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellCd"
                  placeholder="Cooldown"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDmg">Damage</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDmg"
                  placeholder="Damage"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDescription">Description</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDescription"
                  placeholder="Description"
                  required
                />
              </span>
            </p>
          </fieldset>
          <fieldset>
            <p className="field">
              <label htmlFor="spellName">Spell Name</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellName"
                  placeholder="Name"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellImageURL">Spell Image</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellImageURL"
                  placeholder="Link of your spell Image"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellCd">Cooldown</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellCd"
                  placeholder="Cooldown"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDmg">Damage</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDmg"
                  placeholder="Damage"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDescription">Description</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDescription"
                  placeholder="Description"
                  required
                />
              </span>
            </p>
          </fieldset>
          <fieldset>
            <p className="field">
              <label htmlFor="spellName">Spell Name</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellName"
                  placeholder="Name"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellImageURL">Spell Image</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellImageURL"
                  placeholder="Link of your spell Image"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellCd">Cooldown</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellCd"
                  placeholder="Cooldown"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDmg">Damage</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDmg"
                  placeholder="Damage"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDescription">Description</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDescription"
                  placeholder="Description"
                  required
                />
              </span>
            </p>
          </fieldset>
          <fieldset>
            <p className="field">
              <label htmlFor="spellName">Spell Name</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellName"
                  placeholder="Name"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellImageURL">Spell Image</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellImageURL"
                  placeholder="Link of your spell Image"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellCd">Cooldown</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellCd"
                  placeholder="Cooldown"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDmg">Damage</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDmg"
                  placeholder="Damage"
                  required
                />
              </span>
            </p>
            <p className="field">
              <label htmlFor="spellDescription">Description</label>
              <span className="input">
                <input
                  type="text"
                  name="heroSpells[]"
                  id="spellDescription"
                  placeholder="Description"
                  required
                />
              </span>
            </p>
          </fieldset>
        </div>
        <button type="submit" className="create-button">
          Create Hero
        </button>
      </form>
    </>
  );
};

export default Create;
