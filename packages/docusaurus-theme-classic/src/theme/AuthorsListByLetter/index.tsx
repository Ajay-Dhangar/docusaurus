/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {type AuthorLetterEntry} from '@docusaurus/theme-common';
import {listAuthorsByLetters} from '@docusaurus/theme-common/internal';
import Author from '@theme/Author';
import type {Props} from '@theme/AuthorsListByLetter';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function AuthorLetterEntryItem({
  letterEntry,
}: {
  letterEntry: AuthorLetterEntry;
}) {
  return (
    <article>
      <Heading as="h2" id={letterEntry.letter}>
        {letterEntry.letter}
      </Heading>
      <ul className="padding--none">
        {letterEntry.authors.map((author) => (
          <li key={author.key} className={styles.author}>
            <Author {...author} />
          </li>
        ))}
      </ul>
      <hr />
    </article>
  );
}

export default function AuthorsListByLetter({authors}: Props): JSX.Element {
  const letterList = listAuthorsByLetters(authors);
  return (
    <section className="margin-vert--lg">
      {letterList.map((letterEntry) => (
        <AuthorLetterEntryItem
          key={letterEntry.letter}
          letterEntry={letterEntry}
        />
      ))}
    </section>
  );
}