package Novyjj1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Novyjj1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ДокУсловДог
 */
@Entity(name = "IISNovyjj1ДокУсловДог")
@Table(schema = "public", name = "ДокУсловДог")
public class DokUslovDog {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаНач")
    private Date датанач;

    @Column(name = "ДатаОконч")
    private Date датаоконч;

    @Column(name = "Объем")
    private Float объем;

    @Column(name = "Длительн")
    private Integer длительн;


    public DokUslovDog() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаНач() {
      return датанач;
    }

    public void setДатаНач(Date датанач) {
      this.датанач = датанач;
    }

    public Date getДатаОконч() {
      return датаоконч;
    }

    public void setДатаОконч(Date датаоконч) {
      this.датаоконч = датаоконч;
    }

    public Float getОбъем() {
      return объем;
    }

    public void setОбъем(Float объем) {
      this.объем = объем;
    }

    public Integer getДлительн() {
      return длительн;
    }

    public void setДлительн(Integer длительн) {
      this.длительн = длительн;
    }


}