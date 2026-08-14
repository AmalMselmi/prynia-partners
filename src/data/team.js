import ceoPhotoImg from '../assets/Narjess_hachena.png'
import consultantPhoto from '../assets/Hind_houas.png'

/**
 * Team photos only — name/role/description now live in the translation
 * files under `team.ceo` and `team.members`, keyed by array index
 * for the members list, so the same photo always lines up with the
 * correct translated description regardless of language.
 */
export const ceoPhoto = ceoPhotoImg
export const teamPhotos = [consultantPhoto]