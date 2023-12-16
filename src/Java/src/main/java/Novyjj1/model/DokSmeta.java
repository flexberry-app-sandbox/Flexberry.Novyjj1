package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: ДокСмета
 */
@Entity(name = "IISNovyjj1ДокСмета")
@Table(schema = "public", name = "ДокСмета")
public class DokSmeta {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомСмеРас")
    private Integer номсмерас;

    @Column(name = "ОбщСметСт")
    private Float общсметст;

    @OneToMany(mappedBy = "doksmeta", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHSmety> tchsmetys;


    public DokSmeta() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомСмеРас() {
      return номсмерас;
    }

    public void setНомСмеРас(Integer номсмерас) {
      this.номсмерас = номсмерас;
    }

    public Float getОбщСметСт() {
      return общсметст;
    }

    public void setОбщСметСт(Float общсметст) {
      this.общсметст = общсметст;
    }


}